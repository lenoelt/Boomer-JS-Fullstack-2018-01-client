export const signUp = (credentials) => {
  // return (dispatch, getState, { getFirestore }) => {

  //   const firestore = getFirestore();
  //   firestore.collection("users").add({
  //     ...user
  //   }).then(() => {
  //     dispatch({ type: "CREATE_USER", user });
  //   }).catch((error) => {
  //     dispatch({ type: "CREATE_USER_ERROR", error });
  //   })
  // };

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: "REGISTER_SUCCESS" })
    }).catch((error) => {
      dispatch({ type: "REGISTER_ERROR", error });
    });
  }
};

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: "LOGIN_SUCCESS" })
    }).catch((error) => {
      dispatch({ type: "LOGIN_ERROR", error });
    });
  }
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: "SIGNOUT_SUCCESS" })
    })
  }
}