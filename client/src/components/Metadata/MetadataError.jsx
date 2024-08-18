import React from 'react';
import { Typography, CardContent, Alert, Collapse, Box } from '@mui/material';

const getReadableErrorMessage = (error) => {
  if (error.includes('ENOTFOUND')) {
    return "The website couldn't be found. Please check the URL and try again.";
  } else if (error.includes('ETIMEDOUT')) {
    return 'The request timed out. The website might be slow or unavailable.';
  } else if (error.includes('ECONNREFUSED')) {
    return "Couldn't connect to the website. It might be down or blocking our request.";
  } else {
    return 'There was an issue fetching information from this URL.';
  }
};

const MetadataError = ({ item }) => (
  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Alert severity="error" sx={{ mb: 2 }}>
      {getReadableErrorMessage(item.errorDetails)}
    </Alert>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      URL: {item.url}
    </Typography>
    <Collapse in={false}>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Error Details: {item.errorDetails}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Error Type: {item.errorType}
        </Typography>
      </Box>
    </Collapse>
  </CardContent>
);

export default MetadataError;
