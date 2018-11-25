export const createCalendar = calendar => ({
  type: 'CREATE_CALENDAR',
  payload: { calendar }
});

export const getCalendarInfo = id => ({
  type: 'GET_CALENDAR_INFO',
  payload: { id }
});

export const editCalendar = (id, calendar) => ({
  type: 'EDIT_CALENDAR',
  payload: { id, calendar }
});

export const getEvents = (id, month) => ({
  type: 'GET_EVENTS',
  payload: { id, month }
});


export const receiveCalendar = calendar => ({
  type: 'RECEIVE_CALENDAR',
  payload: { calendar }
});

export const receiveCalendars = calendars => ({
  type: 'RECEIVE_CALENDARS',
  payload: { calendars }
});
