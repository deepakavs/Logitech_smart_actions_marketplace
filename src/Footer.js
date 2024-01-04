import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Stack } from '@mui/system';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://logitechsmartactions.com">
        Logitech Smart Actions Template Library
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 2,
                mt: 10,
                position: 'sticky',
                bottom: 0,
                zIndex: 1000,
                backgroundColor: (theme) => theme.palette.primary.main,
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="row"
    justifyContent="space-between">
                    <Grid item xs={12} md={4} lg={4} >
                    <Stack direction="row" spacing={1} justifyContent="left">
                    <Typography variant="body1">
                        Created with ❤️ by Deepak Aitha
                    </Typography>
                        <Link href="https://github.com/deepakavs" color="inherit" target="_blank" rel="noopener">
                        <GitHubIcon sx={{fontSize:'lg'}}/>
                            </Link>
                            <Link href="https://linkedin.com/in/deepakavs" color="inherit" target="_blank" rel="noopener">
                        <LinkedInIcon sx={{fontSize:'lg'}}/>
                            </Link> 
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8} >
                        <Stack direction="row" spacing={1} justifyContent="right">
                        <Copyright />
                        </Stack>
                    </Grid>
                </Grid>
                
            </Container>
        </Box>
    );
};

export default Footer;