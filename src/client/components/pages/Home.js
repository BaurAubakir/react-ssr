import React, { Fragment } from 'react';

import Users, { loadData } from '../users/Users';

const Home = () => {
  return (
    <Fragment>
      <Users />
      <button onClick={() => console.log('Hi there!')}>Press me</button>
    </Fragment>
  );
};

export default {
  loadData,
  component: Home
};
