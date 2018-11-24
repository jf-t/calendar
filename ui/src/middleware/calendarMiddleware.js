import { receiveCalendar, receiveCalendars } from '../actions/calendarActions';
import { createCalendar, getCalendarInfo, editCalendar, getCalendars } from '../util/calendarUtil';

const CalendarMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case 'CREATE_CALENDAR':
      createCalendar(action.payload.calendar,
                     (calendar) => dispatch(receiveCalendar(calendar)));
      return next(action);
    case 'GET_CALENDAR_INFO':
      getCalendarInfo(action.payload.id,
                      (calendar) => dispatch(receiveCalendar(calendar)));
      return next(action);
    case 'EDIT_CALENDAR':
      editCalendar(action.payload.calendar,
                   (calendar) => dispatch(receiveCalendar(calendar)));
      return next(action);
    case 'GET_CALENDARS':
      getCalendars(action.payload.id,
              (calendars) => dispatch(receiveCalendars(calendars)));
      return next(action);
    default:
      return next(action);
  }
}

export default CalendarMiddleware;
