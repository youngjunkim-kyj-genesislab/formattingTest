import { combineReducers } from 'redux';
import todoReduceer from './todo';
import videoReducer from './video';

const rootReducer = combineReducers({
  todoReduceer,
  videoReducer,
});

export default rootReducer;
