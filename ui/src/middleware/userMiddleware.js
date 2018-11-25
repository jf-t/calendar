import { receiveUser, showErrors } from '../actions/userActions';
import { createUser, login, logout, getUser } from '../util/userUtil';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case 'CREATE_USER':
      createUser(action.payload.user,
                 (user) => dispatch(receiveUser(user)),
                 (err) => dispatch(showErrors(err)));
      return next(action);
    case 'LOGIN':
      login(action.payload.creds,
            (user) => dispatch(receiveUser(user)),
            (err) => dispatch(showErrors(err)));
      return next(action);
    case 'LOGOUT':
      logout(action.payload.id,
             () => dispatch(receiveUser({})));
      return next(action);
    case 'GET_USER':
      getUser(action.payload.id,
              (user) => dispatch(receiveUser(user)));
      return next(action);
    default:
      return next(action);
  }
}

export default UserMiddleware;
