import React, { useState } from 'react';
import { Button, Paper } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUpload = ({baseURL, onFileUpload }) => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(`${baseURL}/api/upload`, formData);
      onFileUpload(response.data.key);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a JSON file here, or click to select one</p>
      </div>
      {file && (
        <div>
          <p>Selected File: {file.name}</p>
          <Button variant="contained" color="primary" onClick={uploadFile}>
            Upload
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default FileUpload;
