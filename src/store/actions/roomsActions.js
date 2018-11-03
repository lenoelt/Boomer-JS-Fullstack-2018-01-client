import axios from 'axios';
import { API_URL } from '../../environment';

export const getRooms = () => {
  return (dispatch, getState) => {
    return axios
      .get(API_URL + '/rooms')
      .then(response => {
        dispatch({ type: 'GET_ROOMS_SUCCESS', response });
      })
      .catch(error => {
        dispatch({ type: 'GET_ROOMS_ERROR' });
        throw error;
      });
  };
};
