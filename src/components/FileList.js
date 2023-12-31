import React from 'react';
import {styled } from '@mui/system';
import { Card, Typography, IconButton, Button, Stack } from '@mui/material';
import { CloudDownload, Favorite } from '@mui/icons-material'; // Import the necessary icons
import { useState} from 'react';

const ThumbnailContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
});

const ThumbnailCard = styled(Card)({
  width: 250, // Adjust the width as needed
  height: 200, // Fixed height for a square shape
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
});
const IconMenu = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
});

// Explicitly set the color for IconButton components
const WhiteIconButton = styled(IconButton)({
  color: '#ffffff',
  '&:hover': {
    color: '#008080', // Teal color on hover
  },
});

const IconTextWrapper = styled('div')({
  marginLeft: '4px', // Add margin to create separation
});

const IconSet = styled('div')({
  display: 'flex', // Make the container a flex container
  alignItems: 'center', // Align items in a row
  marginLeft: 'auto', // Push the Avatar to the far right
  justifyContent: 'space-between', 
});
const CardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const FileList = ({ baseURL, files }) => {
  const [likedFiles, setLikedFiles] = useState(new Set());
  const downloadBaseUrl = baseURL.concat('/api/download');

  const toggleLike = (fileKey) => {
    const newLikedFiles = new Set(likedFiles);
    if (newLikedFiles.has(fileKey)) {
      newLikedFiles.delete(fileKey);
    } else {
      newLikedFiles.add(fileKey);
    }
    setLikedFiles(newLikedFiles);
  };

  return (
    <ThumbnailContainer>
      {files.map(file => (
          <ThumbnailCard key={file.name}>
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
                                style={{ color: likedFiles.has(file.name) ? '#FF0000' : '#ffffff' }}
                              >
                <Favorite />
              </WhiteIconButton>
              <Typography variant="caption">123</Typography>
            </IconSet>
          </IconMenu>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            <Typography variant="h6" align="center" fontWeight="bold">
              {file.metadata.displayname}
            </Typography>
            <Button href={`${downloadBaseUrl}/${file.name}`} color="secondary" variant='outlined'
            style={{marginBottom:'1px'}}>
                  <Typography>Get</Typography>
              </Button>
          </Stack>
        </ThumbnailCard>
      ))}
    </ThumbnailContainer>
  );
};

export default FileList;
