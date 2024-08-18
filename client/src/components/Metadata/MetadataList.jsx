import React from 'react';
import { Card, Box, Stack } from '@mui/material';

import MetadataError from './MetadataError';
import MetadataItem from './MetadataItem';

const MetadataList = ({ metadata }) => (
  <Box sx={{ maxWidth: 600, mx: 'auto', my: 4 }}>
    <Stack spacing={3}>
      {[...metadata].reverse().map((item, index) => (
        <Card key={index} sx={{ display: 'flex', overflow: 'hidden' }}>
          {item.error ? <MetadataError item={item} index={index} /> : <MetadataItem item={item} />}
        </Card>
      ))}
    </Stack>
  </Box>
);

export default MetadataList;
