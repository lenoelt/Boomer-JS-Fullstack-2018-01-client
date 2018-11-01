import authenticationReducer from './authenticationReducer';
import roomsReducer from './roomsReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  rooms: roomsReducer,
  user: userReducer
});

export default rootReducer;
