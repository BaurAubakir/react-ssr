import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/userActions';

import UserItem from './UserItem';

const Users = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Fragment>
      <div>Here is a big list of users:</div>
      <ul>
        {users && users.map(user => <UserItem key={user.id} user={user} />)}
      </ul>
    </Fragment>
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
