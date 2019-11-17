import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import usersReducer from './usersReducer';

export default combineReducers({
  routing: routerReducer,
  usersReducer
});
