import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontWeightBold: 'bold',
  },
  palette: {
    primary: {
      main: '#0044ff',
      light: '#ffffff',
      dark: '#000000',
    },
    secondary: {
      main: '#bd180f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
