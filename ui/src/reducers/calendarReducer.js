const CalendarReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_CALENDARS':
      return action.payload.calendars;
    default:
      return state;
  }
}

export default CalendarReducer;
