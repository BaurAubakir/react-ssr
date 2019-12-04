import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import Routes from '../client/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Fragment>{renderRoutes(Routes)}</Fragment>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="theme-color" content="#fff" />
        <link
          rel="stylesheet"
          href="libs/bootstrap/bootstrap.min.css"
        />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
