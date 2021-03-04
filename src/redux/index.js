import { combineReducers } from 'redux';
import todoReduceer from './todo';
import videoReducer from './video';
import basketball from './basketball';

const rootReducer = combineReducers({
  todoReduceer,
  videoReducer,
  basketball,
});

export default rootReducer;
