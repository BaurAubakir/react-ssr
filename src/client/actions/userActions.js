import axios from 'axios';

import { FETCH_USERS } from './actionTypes';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = res.data;

  dispatch({
    type: FETCH_USERS,
    payload: users
  });
};
