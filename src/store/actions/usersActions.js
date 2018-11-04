import axios from 'axios';
import { API_URL } from '../../environment';

export const getUserData = pseudo => {
  return (dispatch, getState) => {
    return axios
      .get(API_URL + '/user/' + pseudo)
      .then(response => {
        dispatch({ type: 'GET_USER_DATA_SUCCESS', response });
      })
      .catch(error => {
        dispatch({ type: 'GET_USER_DATA_ERROR' });
        throw error;
      });
  };
};
