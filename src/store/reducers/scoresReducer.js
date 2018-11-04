const initState = {
  scores: null
};

const scoresReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_SCORES_SUCCESS':
      console.log(action.response.data);
      return {
        ...state,
        scores: action.response.data
      };

    case 'GET_SCORES_ERROR':
      console.log('Sign In Error : ' + action.error.response.data.message);
      return {
        ...state,
        scores: null
      };
  }
  return state;
};

export default scoresReducer;
