import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import UrlInputSection from './UrlInput/UrlInputSection';
import MetadataSection from './Metadata/MetadataSection';

const UrlCollector = () => {
  const [metadata, setMetadata] = useState([]);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          py: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 4,
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          <LinkIcon sx={{ mr: 1, fontSize: '2.5rem' }} /> URL Collector
        </Typography>
        <UrlInputSection setMetadata={setMetadata} />
        <MetadataSection metadata={metadata} setMetadata={setMetadata} />
      </Box>
    </Container>
  );
};

export default UrlCollector;
