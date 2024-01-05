import React, { useState, useEffect } from 'react';
import {Box,AppBar, Toolbar, Button, Container, CssBaseline, Grid, Icon, Item,Typography } from '@mui/material';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import axios from 'axios';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


const App = () => {
  
  const baseURL  = 'https://smartactions-fffpa8d8fpc3amar.z03.azurefd.net';
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
    <Container component="main" maxWidth="lg" style={{paddingTop:40}}   sx={{
      py: 2,
      px: 2,
      mt: 10,
  }}>
      <CssBaseline />
      <Grid container
  direction="column"
  justifyContent="space-between"
  alignItems="center" spacing={2 }>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" style={{display:'inline'}} gutterBottom>A place to share / exchange your creative templates from Logitech Options+ software </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body" align="center" style={{display:'inline'}} gutterBottom>New to Smart Actions?   </Typography>
          <Button variant="contained" color="primary" href="https://youtu.be/pPgJ7Ot8vFA" target="_blank" rel="noopener">
            Watch video here
          </Button>
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
