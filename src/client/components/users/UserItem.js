import React from 'react';

const UserItem = ({ user }) => {
  return (
    <li className='shadow-sm p-3' style={{ listStyle: 'none' }}>
      {user.name}
    </li>
  );
};

export default UserItem;
