import axios from 'axios';

export const getRooms = () => {
  return (dispatch, getState) => {
    return axios.get("http://localhost:3000/rooms")
      .then(response => {
        dispatch({ type: "GET_ROOMS_SUCCESS", response })
      })
      .catch(error => {
        dispatch({ type: "GET_ROOMS_ERROR" });
        throw (error);
      })
  };
}