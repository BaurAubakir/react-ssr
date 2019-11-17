import { FETCH_USERS } from '../actions/actionTypes';

const initialState = {
  users: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
};
