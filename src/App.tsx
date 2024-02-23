import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import {Router} from './pages/Router';
import {theme} from './theme';
import {Provider} from 'react-redux';
import {store} from './Store/store';

export default function App() {
  return (
      <Provider store={store}>
          <MantineProvider theme={theme}>
              <Router/>
          </MantineProvider>
      </Provider>
  );
}
