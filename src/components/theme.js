// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Change this to your desired primary color
    },
    secondary: {
      main: '#E91E63', // Change this to your desired secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Specify your desired font family
  },
  spacing: 8, // Set the default spacing unit (8 pixels in this case)
});

export default theme;
