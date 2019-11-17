import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  const head = () => {
    return (
      <Helmet>
        <title>About page</title>
        <meta property='og:title' content='Welcome to about page' />
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
          <div>Hi from about page</div>
        </div>
      </div>
    </Fragment>
  );
};

export default {
  component: About
};
