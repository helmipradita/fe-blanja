const initialState = {
  user: {
    id: '',
    email: '',
    fullname: '',
    role: '',
    token: '',
  },
  isLoading: false,
};

const userReucer = (state = initialState, action) => {
  if (action.type === 'USER_LOGIN_PENDING') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'USER_LOGIN_SUCCESS') {
    return {
      ...state,
      user: action,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default userReucer;
