import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return merge(state, { activeUser: action.payload.user});
    case 'USER_ERROR':
      return merge(state, { error: action.payload.error });
    default:
      return state;
  }
}

export default UserReducer;
