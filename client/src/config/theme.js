import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#534bae',
      main: '#0d47a1',
      dark: '#000051',
      contrastText: '#ffffff',
    },

    secondary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827',
      contrastText: '#000000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: '#67daff',
      main: '#0288d1',
      dark: '#007ac1',
      contrastText: '#000000',
    },
    secondary: {
      light: '#f9683a',
      main: '#bf360c',
      dark: '#870000',
      contrastText: '#ffffff',
    },
  },
});