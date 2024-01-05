import { ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import ShareButtons from './components/Sharebuttons';
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#008080', // Teal color for buttons
    },
    secondary: {
      main: '#ffffff', // White color for buttons
    },
    text: {
      primary: '#ffffff', // White text
    },
    background: {
      default: '#000000', // Black background
      menus:   '#808080', // grey background
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#000000',
        }
      }
    }
  }
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />  
        <Header/>
          <App />
          <ShareButtons/>
        <Footer />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
