// These are filled with mock data until API is done

export const createUser = (user, success, error) => {
  console.log("createUser", user);
  success({ id: 1, email: 'jackftilly@gmail.com' });
}

export const loginWithSession = (session, success, error) => {
  console.log("mock login with session", session);
  if (session === 'SAMPLE_SESSION_TOKEN') {
    success({ id: 1, email: 'jackftilly@gmail.com', session: 'SAMPLE_SESSION_TOKEN' });
  }
}

export const loginWithCreds = (creds, success, error) => {
  console.log("mock login with creds", creds);
  if (creds.email === 'jackftilly@gmail.com' && creds.password === 'password') {
    success({ id: 1, email: 'jackftilly@gmail.com', session: 'SAMPLE_SESSION_TOKEN' });
  } else {
    error({ error: 'Incorrect username/password' });
  }
}

export const logout = (id, success, error) => {
  success({ message: 'Successsfully logged out'});
}

export const getUser = (id, success, error) => {
  if (id === 1) {
    success({ id: 1, email: 'jackftilly@gmail.com' });
  } else {
    error({ error: 'No user with that ID' });
  }
}

export const storeSession = token => {
  // TODO: store session in localStorage
}

export const getSession = (cb) => {
  // TODO: get session from localStorage
  cb('SAMPLE_SESSION_TOKEN');
}
