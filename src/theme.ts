import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0862e8',
      light: '#60bbb1',
      dark: '#333a5c',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#02021a',
      paper: '#12122b',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: 'transparent',
        }, 
      }
    },
  },
});

export default theme;
