const initState = {
  authError: null,
  registerError: null
}

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      console.log("Trying to sign In : ", action.credentials);
      return {
        ...state,
        authError: null
      };

    case "SIGN_IN_ERROR":
      console.log("Sign In Error : ", action.error);
      return {
        ...state,
        authError: "Sign In Error : " + action.error
      };

    case "SIGN_UP_SUCCESS":
      console.log("Sign Up : ", action.credentials);
      return {
        ...state,
        registerError: null
      };

    case "SIGN_UP_ERROR":
      console.log("Sign Up Error : ", action.error);
      return {
        ...state,
        registerError: "Sign Up Error : " + action.error
      };

  }
  return state;
}

export default authenticationReducer;