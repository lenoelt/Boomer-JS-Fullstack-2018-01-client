
export const signUp = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firebase = getFirebase();
    const lala = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((response) => {
      return lala.collection("users").doc(response.user.uid).set({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        initials: credentials.firstName[0] + credentials.lastName[0]
      });
    }).then(() => {
      dispatch({ type: "REGISTER_SUCCESS" })
    }).catch((error) => {
      dispatch({ type: "REGISTER_ERROR", error });
    })
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