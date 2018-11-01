const initState = {
  userInfos: null
};

const roomsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER_DATA_SUCCESS':
      //console.log('Get User Data Success : ', action.response.data.data);
      return {
        ...state,
        userInfos: action.response.data.data
      };

    case 'GET_USER_DATA_ERROR':
      console.log('Get User Data Error : ', action.error);
      return {
        ...state
      };
  }
  return state;
};

export default roomsReducer;
