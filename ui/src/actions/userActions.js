export const createUser = user => ({
  type: 'CREATE_USER',
  payload: { user }
});

export const loginWithSession = session => ({
  type: 'LOGIN_WITH_SESSION',
  payload: { session }
});

export const loginWithCreds = creds => ({
  type: 'LOGIN_WITH_CREDS',
  payload: { creds }
});

export const getSession = () => ({
  type: 'GET_SESSION'
});

export const logout = id => ({
  type: 'LOGOUT',
  payload: { id }
});

export const getUser = id => ({
  type: 'GET_USER',
  payload: { id }
});

export const getCalendars = id => ({
  type: 'GET_CALENDARS',
  payload: { id }
});

export const receiveUser = user => ({
  type: 'RECEIVE_USER',
  payload: { user }
});

export const showErrors = err => ({
  type: 'USER_ERROR',
  payload: { error: err }
});
