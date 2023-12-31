import React, { useState } from 'react';
import { Button, Paper } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import {styled} from '@mui/system';

const FileUploadContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

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
      if (response.status === 200) {
        console.log('File uploaded successfully');
        setFile(null);
      }
      onFileUpload(response.data.name);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
      <FileUploadContainer>
      <div {...getRootProps()} style={{border: '2px dashed #008080',  padding: 20, borderRadius: 5, }}>
        <input {...getInputProps()} />
        <p>Drag/Select the Smart Actions JSON file exported from Options+ software</p>
        {file && (<p>Selected File: {file.name}</p>)}
      </div>
        <div>
          <Button variant="contained" color="primary" disabled={!file} onClick={uploadFile}>
            Upload
          </Button>
        </div>
        </FileUploadContainer>
    </Paper>
  );
};

export default FileUpload;
