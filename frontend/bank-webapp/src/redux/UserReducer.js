const initialState = {
  user: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.user,
      };

    default:
      return state;
  }
}

export default userReducer;
