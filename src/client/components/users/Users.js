import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/userActions';

import UserItem from './UserItem';

const Users = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <ul className='list-group'>
      {users && users.map(user => <UserItem key={user.id} user={user} />)}
    </ul>
  );
};

const mapStateToProps = state => ({
  users: state.usersReducer.users
});

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export { loadData };
export default connect(mapStateToProps, { fetchUsers })(Users);
