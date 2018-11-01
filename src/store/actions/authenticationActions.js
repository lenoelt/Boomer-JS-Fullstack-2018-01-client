import axios from 'axios';

export const signIn = credentials => {
  return (dispatch, getState) => {
    return axios
      .post('http://localhost:3000/auths/login', credentials, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(response => {
        dispatch({ type: 'SIGN_IN_SUCCESS', response });
      })
      .catch(error => {
        dispatch({ type: 'SIGN_IN_ERROR', error });
        throw error;
      });
  };
};

export const signUp = credentials => {
  return (dispatch, getState) => {
    return axios
      .post('http://localhost:3000/auths/signup', credentials, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(response => {
        dispatch({ type: 'SIGN_UP_SUCCESS', response });
      })
      .catch(error => {
        dispatch({ type: 'SIGN_UP_ERROR', error });
        throw error;
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    return axios
      .get('http://localhost:3000/auths/logout')
      .then(response => {
        dispatch({ type: 'SIGN_OUT_SUCCESS', response });
      })
      .catch(error => {
        dispatch({ type: 'SIGN_OUT_ERROR' });
        throw error;
      });
  };
};

export const getUserData = pseudo => {
  return (dispatch, getState) => {
    return axios
      .get('http://localhost:3000/user/' + pseudo)
      .then(response => {
        dispatch({ type: 'GET_USER_DATA_SUCCESS', response });
      })
      .catch(error => {
        dispatch({ type: 'GET_USER_DATA_ERROR' });
        throw error;
      });
  };
};
