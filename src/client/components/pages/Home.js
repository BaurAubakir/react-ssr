import React, { Fragment } from 'react';

const users = [
  { id: 1, name: 'John Doe', email: 'jdoe@gmail.com' },
  { id: 2, name: 'Sam Smith', email: 'ssmith@gmail.com' },
  { id: 3, name: 'Karen Wilson', email: 'kwilson@gmail.com' },
  { id: 4, name: 'Brad Traversy', email: 'btraversy@gmail.com' }
];

const Home = () => {
  return (
    <Fragment>
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <button onClick={() => console.log('Hi there!')}>Press me</button>
    </Fragment>
  );
};

export default Home;
