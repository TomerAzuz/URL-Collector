import React from 'react';
import { Paper } from '@mui/material';
import UrlInputForm from './UrlInputForm';

const UrlInputSection = ({ setMetadata }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, width: '100%', mb: 4 }}>
      <UrlInputForm setMetadata={setMetadata} />
    </Paper>
  );
};

export default UrlInputSection;
