const initState = {
  authError: null,
  registerError: null
}

const authenticationReducer = (state = initState, action) => {

  switch (action.type) {

    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authError: null
      };

    case "LOGIN_ERROR":
      console.log("Login Error");
      return {
        ...state,
        authError: "Login failed"
      };

    case "REGISTER_SUCCESS":
      console.log("A new user has been registered.");
      return state;

    case "REGISTER_ERROR":
      console.log("ERROR : A problem occurred during the registration : ", action.error.message);
      return {
        ...state,
        registerError: action.error.message
      };

    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;

    case "LOGOUT_ERROR":
      console.log("Log out Error");
      return state;

    default:
      return state;
  }
}

export default authenticationReducer;