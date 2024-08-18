import React from 'react';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const UrlInputField = ({ currentUrl, setCurrentUrl, error, setError, addUrl, disabled }) => {
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setCurrentUrl(url);
    setError('');
  };

  return (
    <TextField
      value={currentUrl}
      onChange={handleUrlChange}
      type="url"
      variant="outlined"
      label="Enter URL"
      fullWidth
      error={!!error}
      helperText={error}
      disabled={disabled}
      inputProps={{ maxLength: 2000 }}
      InputProps={{
        endAdornment: (
          <Button
            variant="contained"
            onClick={addUrl}
            aria-label="Add URL"
            disabled={!currentUrl.trim()}
            sx={{ ml: 1 }}
          >
            <AddIcon />
          </Button>
        ),
      }}
    />
  );
};

export default UrlInputField;
