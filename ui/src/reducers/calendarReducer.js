import merge from 'lodash/merge';

const CalendarReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_CALENDARS':
      return merge({}, state, { calendars: action.payload.calendars });
    case 'RECEIVE_CALENDAR':
      return merge({}, state, { activeCalendar: action.payload.calendar });
    case 'CALENDAR_ERROR':
      return merge({}, state, { error: action.payload.error });
    default:
      return state;
  }
}

export default CalendarReducer;
