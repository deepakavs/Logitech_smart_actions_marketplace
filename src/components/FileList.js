import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const FileList = ({ files }) => {
  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <List>
        {files.map((file) => (
          <ListItem key={file.key}>
            <ListItemText
              primary={file.key}
              secondary={`Uploaded at: ${file.uploadedAt}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FileList;
