const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return { activeUser: action.payload.user};
    case 'USER_ERROR':
      return { activeUser: null, error: action.payload.error }
    default:
      return state;
  }
}

export default UserReducer;
