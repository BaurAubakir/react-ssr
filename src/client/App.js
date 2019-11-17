import '@babel/polyfill';
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>{renderRoutes(Routes)}</Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
