import React, { useState } from 'react';
import { Stack } from '@mui/material';
import DOMPurify from 'dompurify';
import UrlInputField from './UrlInputField';
import UrlCounter from './UrlCounter';
import UrlList from './UrlList';
import SubmitButton from '../common/SubmitButton';
import { validateUrl } from '../../utils';
import api from '../../api/api';

const MIN_URLS_REQUIRED = 3;
const MAX_URLS_ALLOWED = 30;

const UrlInputForm = ({ setMetadata }) => {
  const [urls, setUrls] = useState([]);
  const [currentUrl, setCurrentUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (urls.length < MIN_URLS_REQUIRED) {
      setError(`You must submit at least ${MIN_URLS_REQUIRED} URLs`);
      return;
    }
    setLoading(true);
    try {
      const response = await api.post(
        '/api/fetch-metadata',
        { urls },
      );
      setMetadata((prevMetadata) => [...prevMetadata, ...response.data]);
      setUrls([]);
      setCurrentUrl('');
      setError('');
    } catch (err) {
      setError('Failed to submit URLs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addUrl = () => {
    const newUrl = DOMPurify.sanitize(currentUrl.trim());
    const validationError = validateUrl(newUrl, urls);
    if (validationError) {
      setError(validationError);
      return;
    }
    setUrls((prevUrls) => [...prevUrls, newUrl]);
    setCurrentUrl('');
    setError('');
  };

  const removeUrl = (index) => {
    setUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <UrlInputField
          currentUrl={currentUrl}
          setCurrentUrl={setCurrentUrl}
          error={error}
          setError={setError}
          addUrl={addUrl}
          disabled={urls.length >= MAX_URLS_ALLOWED}
        />
        <UrlCounter
          urlCount={urls.length}
          minRequired={MIN_URLS_REQUIRED}
          maxAllowed={MAX_URLS_ALLOWED}
        />
        {urls.length > 0 && <UrlList urls={urls} removeUrl={removeUrl} />}
        <SubmitButton
          isSubmitting={loading}
          isDisabled={urls.length < MIN_URLS_REQUIRED || urls.length > MAX_URLS_ALLOWED}
        />
      </Stack>
    </form>
  );
};

export default UrlInputForm;
