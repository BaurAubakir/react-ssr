import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Users, { loadData } from '../users/Users';

const Home = () => {
  const head = () => {
    return (
      <Helmet>
        <title>React SSR</title>
        <meta property='og:title' content='React Server Side Rendering' />
      </Helmet>
    );
  };
  return (
    <Fragment>
      {head()}
      <div className='container'>
        <div
          className='row justify-content-center align-items-center'
          style={{ height: '100vh' }}
        >
          <Users />
        </div>
      </div>
    </Fragment>
  );
};

export default {
  loadData,
  component: Home
};
