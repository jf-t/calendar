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
    success([{ id: 1, name: "Jack's Calendar", userId: 1, color: '#'}]);
  } else {
    success([]);
  }
}

// TODO: This will format the month of date objects to be returned back to component level
export const formatMonth = (month) => {
  let time = new Date();

  // get current month, week, day
  let currentMonth = time.getMonth(), // 0 - 11
      currentDay = time.getDate(), // 1 - 31
      dayOfWeek = time.getDay(); // 0 (sunday) - 6 (saturday)

  // setting end of last month, unless current month starts on Sunday - time.getDay() === 0
  time.setDate(1);
  time.setDate(time.getDate() - time.getDay());

  let firstDay = new Date(time);

  // 1st day of next month;
  time.setDate(time.getDate() + time.getDay());
  time.setMonth(time.getMonth() + 1);

  let lastDay = new Date(time);

  time = new Date();

  return []
}

export const formatWeek = (time, isCurrent) => {

}
