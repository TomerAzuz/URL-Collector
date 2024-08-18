import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MetadataList from './MetadataList';
import ConfirmationDialog from '../common/ConfirmationDialog';

const MetadataSection = ({ metadata, setMetadata }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClearMetadata = () => {
    setOpenDialog(true);
  };

  const confirmClearMetadata = () => {
    setMetadata([]);
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (metadata.length === 0) return null;

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleClearMetadata}
        sx={{ mb: 2 }}
      >
        Clear Metadata
      </Button>
      <MetadataList metadata={metadata} />
      <ConfirmationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={confirmClearMetadata}
        title="Clear all metadata?"
        content="Are you sure you want to clear all metadata? This action cannot be undone."
      />
    </Box>
  );
};

export default MetadataSection;
