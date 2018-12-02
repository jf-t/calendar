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

// TODO: This will format the month of date objects to be returned back to component level
export const formatMonth = (time, isCurrent) => {
  // get current month, week, day
  // loop through this.props.events for each day and set colors for each
  let currentMonth = time.getMonth(); // 0 - 11
  let currentDay = time.getDate(); // 1 - 31
  let dayOfWeek = time.getDay(); // 0 (sunday) - 6 (saturday)

  time.setDate(1);
  let monthFirstDay = time.getDay();
  let daysInFirstWeek = 7 - monthFirstDay;

  let firstWeek = [];
  for (let i of [...Array(daysInFirstWeek).keys()]) {
    firstWeek.push({day: i});
  };

  console.log(firstWeek);
}

export const formatWeek = (time, isCurrent) => {

}
