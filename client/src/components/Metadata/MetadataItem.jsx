import React from 'react';
import { Typography, CardContent, CardMedia, Link } from '@mui/material';

const MetadataItem = ({ item }) => (
  <>
    <CardMedia
      component="img"
      sx={{ width: 150, height: 150, objectFit: 'cover' }}
      image={item.image}
      alt={item.title}
    />
    <CardContent
      sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
      <Link href={item.url} target="_blank" rel="noopener noreferrer" variant="body2">
        {item.url}
      </Link>
    </CardContent>
  </>
);

export default MetadataItem;
