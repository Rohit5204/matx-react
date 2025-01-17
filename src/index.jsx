import ReactDOM from 'react-dom';
import App from './app/App';
import { StyledEngineProvider } from '@mui/styled-engine';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <BrowserRouter> */}
      <CssBaseline />
      <App />
    </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById('root')
);

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
