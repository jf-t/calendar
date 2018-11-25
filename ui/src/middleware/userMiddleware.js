import { receiveUser, showErrors } from '../actions/userActions';
import { createUser, loginWithSession, loginWithCreds, logout, getUser, storeSession, getSession } from '../util/userUtil';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  const loginSuccess = user => {
    dispatch(receiveUser(user));
    storeSession(user.sessionToken);
  };

  switch (action.type) {
    case 'CREATE_USER':
      createUser(action.payload.user,
                 (user) => dispatch(receiveUser(user)),
                 (err) => dispatch(showErrors(err)));

      return next(action);

    case 'GET_SESSION':
      getSession(session => {
        if (session) {
          loginWithSession(session,
                           loginSuccess,
                           (err) => dispatch(showErrors(err)));
        }
      });

      return next(action);

    case 'LOGIN':
      getSession(session => {
        if (session) {
          loginWithSession(session,
                           loginSuccess,
                           (err) => dispatch(showErrors(err)));
        } else {
          loginWithCreds(action.payload.creds,
            loginSuccess,
            (err) => dispatch(showErrors(err)));
        }
      });

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
