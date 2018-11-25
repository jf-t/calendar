// These are filled with mock data until API is done

export const createEvent = (event, success, error) => {
  success({ id: 1, name: 'Code at Little Skips', calendarId: 1, startTime: 1543161858300, endTime: 1543164918300 });
}

export const getEvent = (id, success, error) => {
  if (id === 1) {
    success({ id: 1, name: 'Code at Little Skips', calendarId: 1, startTime: 1543161858300, endTime: 1543164918300 });
  } else {
    error({ error: 'No event with that ID' });
  }
}

export const editEvent = (id, event, success, error) => {
  success({ id: 1, name: (event.name || 'Code at Little Skips'), calendarId: 1, startTime: (event.startTime || 1543161858300), endTime: (event.endTime || 1543164918300) });
}

export const getEvents = (params, success, error) => {
  success([{ id: 1, name: 'Code at Little Skips', calendarId: 1, startTime: 1543161858300, endTime: 1543164918300 }]);
}
