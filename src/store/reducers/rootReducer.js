import authenticationReducer from './authenticationReducer';
import roomsReducer from './roomsReducer';
import userReducer from './userReducer';
import scoresReducer from './scoresReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  rooms: roomsReducer,
  user: userReducer,
  scores: scoresReducer
});

export default rootReducer;
