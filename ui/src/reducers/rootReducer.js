import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CalendarReducer from './calendarReducer';
import EventReducer from './eventReducer';

const RootReducer = combineReducers({
  user: UserReducer,
  calendar: CalendarReducer,
  event: EventReducer
});

export default RootReducer;
