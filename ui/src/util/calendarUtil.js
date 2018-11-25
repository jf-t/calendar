// These are filled with mock data until API is done

export const createCalendar = (calendar, success, error) => {
  success({ id: 1, name: "Jack's Calendar", userId: 1 });
}

export const getCalendarInfo = (id, success, error) => {
  if (id === 1) {
    success({ id: 1, name: "Jack's Calendar", userId: 1 });
  }
}

export const editCalendar = (id, calendar, success, error) => {
  success({ id: id, name: (calendar.name || "Jack's Calendar"), userId: (calendar.userId || 1) });
}

export const getCalendars = (userId, success, error) => {
  if (userId === 1) {
    success([{ id: 1, name: "Jack's Calendar", userId: 1 }]);
  } else {
    success([]);
  }
}
