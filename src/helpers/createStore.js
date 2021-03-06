import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../client/reducers';

const initialState = {};

export default () => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
};
