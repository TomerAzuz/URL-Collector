import React from 'react';
import { Button, CircularProgress } from '@mui/material';

const SubmitButton = ({ isSubmitting, isDisabled }) => (
  <Button type="submit" variant="contained" disabled={isSubmitting || isDisabled} sx={{ mt: 2 }}>
    {isSubmitting ? <CircularProgress size={24} /> : 'Submit URLs'}
  </Button>
);

export default SubmitButton;
