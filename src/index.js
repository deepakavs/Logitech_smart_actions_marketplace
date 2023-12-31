import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, styled } from '@mui/material';

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
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #ffffff', // White border for cards
          position: 'relative',
        }
      }
    }
  }
});

root.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
         <App />
     </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
