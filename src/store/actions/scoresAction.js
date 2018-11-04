import axios from 'axios';
import { API_URL } from '../../environment';

export const getTopScores = () => {
  return (dispatch, getState) => {
    return axios
      .get(API_URL + '/top/')
      .then(response => {
        dispatch({ type: 'GET_SCORES_SUCCESS', response });
      })
      .catch(error => {
        dispatch({ type: 'GET_SCORES_ERROR' });
        throw error;
      });
  };
};
