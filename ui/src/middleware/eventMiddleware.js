import { receiveEvent, receiveEvents, showErrors } from '../actions/eventActions';
import { createEvent, getEvent, editEvent, getEvents } from '../util/eventUtil';

const CalendarMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case 'CREATE_EVENT':
      createEvent(action.payload.event,
                  (event) => dispatch(receiveEvent(event)));
      return next(action);
    case 'GET_EVENT':
      getEvent(action.payload.id,
               (event) => dispatch(receiveEvent(event)),
               (err) => dispatch(showErrors(err)));
      return next(action);
    case 'EDIT_EVENT':
      editEvent(action.payload.event,
                (event) => dispatch(receiveEvent(event)));
      return next(action);
    case 'GET_EVENTS':
      getEvents(action.payload,
                     (events) => dispatch(receiveEvents(events)));
      return next(action);
    default:
      return next(action);
  }
}

export default CalendarMiddleware;
