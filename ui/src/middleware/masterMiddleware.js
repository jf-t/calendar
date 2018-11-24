import UserMiddleware from './userMiddleware';
import CalendarMiddleware from './calendarMiddleware';
import EventMiddleware from './eventMiddleware';

import { applyMiddleware } from 'redux';


const MasterMiddleware = applyMiddleware(UserMiddleware,
                                         CalendarMiddleware,
                                         EventMiddleware);

export default MasterMiddleware;
