export const createUser = user => ({
  type: 'CREATE_USER',
  payload: { user }
});

export const login = creds => ({
  type: 'LOGIN',
  payload: { creds }
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
