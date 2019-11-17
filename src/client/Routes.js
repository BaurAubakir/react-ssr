import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';

export default () => {
  return (
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Fragment>
  );
};
