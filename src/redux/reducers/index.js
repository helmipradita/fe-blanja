import { combineReducers } from 'redux';
import userReucer from './user';

const rootReducer = combineReducers({
  user: userReucer,
});

export default rootReducer;
