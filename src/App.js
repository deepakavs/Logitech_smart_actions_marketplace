import React, { useState, useEffect } from 'react';
import {Box, Container, CssBaseline, Grid, Icon, Item,Typography } from '@mui/material';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import axios from 'axios';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const App = () => {
  
  const baseURL  = 'https://getsmartactions.azurewebsites.net'
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Fetch uploaded files from Azure Blob store
  const fetchFiles = async () => {
    try {
      const response = await axios.create({baseURL: baseURL}).get('/api/files');
      setUploadedFiles(response.data.blobItems);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };
     
  const handleFileUpload = async (name) => {
    setUploadedFiles((prevFiles) => [
      { name},
      ...prevFiles,
    ]);
  fetchFiles();
  };
  
  useEffect(() => {
    fetchFiles();
  },[]); // Run once on component mount


  return (
    <Container component="main" maxWidth="lg" style={{paddingTop:40}}>
      <CssBaseline />
      <Grid container
  direction="column"
  justifyContent="space-between"
  alignItems="center" spacing={2}>
        <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
       Logitech  <Typography color="primary" style={{display:'inline', fontWeight:'bold', fontFamily: "'Noto Sans KR', sans-serif"}}> <TaskAltIcon fontSize="large"/> SMART ACTIONS</Typography> Templates
      </Typography>
        </Grid>
        <Grid item xs={12}>
          <FileUpload baseURL={baseURL} onFileUpload={handleFileUpload} />
        </Grid>
        <Grid item xs={12}>
         <FileList  baseURL={baseURL} files={uploadedFiles} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
