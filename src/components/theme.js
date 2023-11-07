import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Change the primary color
    },
    secondary: {
      main: '#E91E63', // Change the secondary color
    },
    other: {
        main: '#231F20'
    }
  },
});

export default theme;