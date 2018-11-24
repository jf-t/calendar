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

export const getCalendarMonth = (id, month) => ({
  type: 'GET_CALENDAR_MONTH',
  payload: { id, month }
});

export const getCalendarWeek = (id, week) => ({
  type: 'GET_CALENDAR_WEEK',
  payload: { id, week }
});

export const getCalendarDay = (id, day) => ({
  type: 'GET_CALENDAR_DAY',
  payload: { id, day }
});

export const receiveCalendar = calendar => ({
  type: 'RECEIVE_CALENDARS',
  payload: { calendar }
});

export const receiveCalendars = calendars => ({
  type: 'RECEIVE_CALENDARS',
  payload: { calendars }
});
