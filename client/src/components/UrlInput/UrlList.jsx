import React from 'react';
import { List, ListItem, ListItemText, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UrlList = ({ urls, removeUrl }) => (
  <Paper variant="outlined" sx={{ maxHeight: 200, overflow: 'auto' }}>
    <List dense>
      {urls.map((url, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeUrl(index)}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          }
          sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
        >
          <ListItemText
            primary={url}
            primaryTypographyProps={{
              variant: 'body2',
              sx: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
            }}
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default UrlList;
