import authenticationReducer from './authenticationReducer';
import roomsReducer from './roomsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  rooms: roomsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;
