import React from 'react';
import {styled } from '@mui/system';
import {Grid, Box, Card, Typography, IconButton, Button, Stack, TextField } from '@mui/material';
import { CloudDownload, Favorite } from '@mui/icons-material'; // Import the necessary icons
import { useState, useEffect} from 'react';

const ThumbnailContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
});

const ThumbnailBox = styled('div')({
  height: 200, // Fixed height for a square shape
  minWidth: 200, // Fixed width for a square shape
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #ffffff', // White border for cards
  borderRadius: 5,
});
const IconMenu = styled('div')({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

// Explicitly set the color for IconButton components
const WhiteIconButton = styled(IconButton)({
  color: '#ffffff',
  '&:hover': {
    color: '#008080', // Teal color on hover
  },
});

const IconSet = styled('div')({
  display: 'flex', // Make the container a flex container
  alignItems: 'center', // Align items in a row
  marginLeft: 'auto', // Push the Avatar to the far right
  justifyContent: 'space-between', 
});
const FileList = ({ baseURL, files }) => {
  const [likedFiles, setLikedFiles] = useState(new Set());
  const downloadBaseUrl = baseURL.concat('/api/download');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

    const [filteredAndSortedFiles,setfilteredAndSortedFiles] = useState(files);
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  const handleSortChange = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };
  const toggleLike = (fileKey) => {
    const newLikedFiles = new Set(likedFiles);
    if (newLikedFiles.has(fileKey)) {
      newLikedFiles.delete(fileKey);
    } else {
      newLikedFiles.add(fileKey);
    }
    setLikedFiles(newLikedFiles);
  };

  useEffect(() => {
    const f = files.filter((file) => file.metadata.displayname.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return order * a.metadata.displayname.localeCompare(b.metadata.displayname);
    });
    setfilteredAndSortedFiles(f);
  },[searchQuery]);
 

  return (
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center" spacing={2} >
      <Grid item xs={6}>
        <TextField id="outlined-basic" label="Search Templates" variant="outlined" fullWidth  onChange={handleSearchChange} />
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={3}>
        </ Grid>
        <Grid item xs={3}>
        </ Grid>
      </Grid>
      {filteredAndSortedFiles.map(file => (
          <Grid item xs={4} key={file.name}>
          <ThumbnailBox>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              spacing={5}>
                <IconMenu>
              <IconSet>
                <WhiteIconButton>
                    <CloudDownload />
                </WhiteIconButton>
                <Typography variant="caption">123</Typography>
              </IconSet>

              <IconSet>
                <WhiteIconButton
                                  onClick={() => toggleLike(file.name)}
                                  style={{ color: likedFiles.has(file.name) ? '#FF0000' : 'primary' }}
                                >
                  <Favorite />
                </WhiteIconButton>
                <Typography variant="caption">123</Typography>
              </IconSet>
            </IconMenu>
            <Card>     
            <Typography variant="h6" align="center" fontWeight="bold">
                {file.metadata && file.metadata.displayname}
              </Typography>
            </Card>
              <Button href={`${downloadBaseUrl}/${file.name}`} color="secondary" variant='outlined'
              style={{marginBottom:'1px'}}>
                    <Typography>Get</Typography>
                </Button>
            </Stack>
          </ThumbnailBox>
        </Grid>
      ))}
    </Grid>
  );
};

export default FileList;
