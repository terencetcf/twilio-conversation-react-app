import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Conversations } from './components/conversations';
import './App.scss';
import { SnackbarProvider } from 'notistack';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider maxSnack={3}>
        <div className="App">
          <Conversations />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
