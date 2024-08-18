import React from 'react';
import { Box, Typography, LinearProgress, Tooltip } from '@mui/material';

const UrlCounter = ({ urlCount, minRequired, maxAllowed }) => {
  const progress = (urlCount / maxAllowed) * 100;
  const getColor = () => {
    if (urlCount < minRequired) return 'warning';
    if (urlCount >= maxAllowed) return 'error';
    return 'success';
  };

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2">
          URLs added: <strong>{urlCount}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {minRequired} min | {maxAllowed} max
        </Typography>
      </Box>
      <Tooltip title={`${urlCount} / ${maxAllowed} URLs`} arrow placement="top">
        <LinearProgress
          variant="determinate"
          value={progress}
          color={getColor()}
          sx={{ height: 10, borderRadius: 5 }}
        />
      </Tooltip>
    </Box>
  );
};

export default UrlCounter;
