
import axios from 'axios';

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    return axios.post("/auths/login", credentials, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        console.log("Login Response : ", response);
        dispatch({ type: "SIGN_IN_SUCCESS", response })
      })
      .catch(error => {
        dispatch({ type: "SIGN_IN_ERROR" });
        throw (error);
      })
  };
};

export const signUp = (credentials) => {
  return (dispatch, getState) => {
    return axios.post("/auths/signup", credentials, {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        dispatch({ type: "SIGN_UP_SUCCESS", response })
      })
      .catch(error => {
        dispatch({ type: "SIGN_UP_ERROR", error });
        throw (error);
      })
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    return axios.get("auths/logout")
      .then(response => {
        dispatch({ type: "SIGN_OUT_SUCCESS", response })
      })
      .catch(error => {
        dispatch({ type: "SIGN_OUT_ERROR" });
        throw (error);
      })
  };
};

// export const postStuff = (stuff) => {

//   *** GET METHOD *****
//   *********************
//   return (dispatch, getState) => {
//     return axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//       stuff = response.data;
//       dispatch({type: "POST_STUFF", stuff})
//     })
//     .catch(error => {
//       dispatch({type: "POST_ERROR"});
//       throw(error);
//     })
//   };

//   *** POST METHOD *****
//   *********************
//   return (dispatch, getState) => {
//     return axios.post("https://jsonplaceholder.typicode.com/posts", stuff, {
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//       .then(() => {
//         dispatch({ type: "POST_STUFF", stuff })
//       })
//       .catch(error => {
//         dispatch({ type: "POST_ERROR" });
//         throw (error);
//       })
//   };
// };