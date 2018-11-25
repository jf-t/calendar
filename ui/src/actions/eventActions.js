export const createEvent = event => ({
  type: 'CREATE_EVENT',
  payload: { event }
});

export const getEvent = id => ({
  type: 'GET_EVENT',
  payload: { id }
});

export const editEvent = (id, event) => ({
  type: 'EDIT_EVENT',
  payload: { id, event }
});

export const deleteEvent = id => ({
  type: 'DELETE_EVENT',
  payload: { id }
});

export const receiveEvent = event => ({
  type: 'RECEIVE_EVENT',
  payload: { event }
});

export const receiveEvents = events => ({
  type: 'RECEIVE_EVENTS',
  payload: { events }
});

export const showErrors = err => ({
  type: 'EVENT_ERROR',
  payload: { error: err }
});
