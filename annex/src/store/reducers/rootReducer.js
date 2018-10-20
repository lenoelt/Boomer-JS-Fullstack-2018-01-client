import authenticationReducer from './authenticationReducer';
import roomsReducer from './roomsReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
  auth: authenticationReducer,
  rooms: roomsReducer
})

export default rootReducer;