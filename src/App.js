import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import axios from 'axios';

const App = () => {
  
  const baseURL  = 'http://localhost:5000'
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    // Fetch uploaded files from S3
    const fetchFiles = async () => {
      try {
        const response = await axios.create({baseURL: baseURL}).get('/api/files');
        setUploadedFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []); // Run once on component mount

  const handleFileUpload = (key) => {
    setUploadedFiles((prevFiles) => [
      { key, uploadedAt: new Date().toLocaleString() },
      ...prevFiles,
    ]);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography variant="h4" align="center" gutterBottom>
        S3 File Upload with React and Material-UI
      </Typography>
      <FileUpload baseURL={baseURL} onFileUpload={handleFileUpload} />
      <FileList files={uploadedFiles} />
    </Container>
  );
};

export default App;
