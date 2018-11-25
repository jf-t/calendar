# Schema:
### user
  - id primary
  - email string required
  - password string required (encoded)
  - session string (encoded/generated)

### calendar
  - id primary
  - user_id foreign required
  - name string required

### event
  - id primary
  - calendar_id foreign required
  - start_time string required (datestring)
  - end_time string required (datestring)
  - name string required

# Endpoints:
## User Routes
### POST `/user`
    Body:
      email, (string)
      password, (string)
    Response:
      { id, email }

### POST `/auth`
    Body:
      email, (string)
      password (string)
    Response
      { id, email, session }

### GET `/user/:id`
    Params:
      id (int)
    Response:
      { id, email }

### DELETE `/logout`
    Body:
      id (int)
    Response:
      (success message)

### GET `/user/:id/calendars`
    Params:
      id (int)
    Response:
      [{ id, name, userId }]
    Description:
      Every calendar that this user is a part of.
      If a user has no calendars, return empty array.
      If user does not exist, return error

## Calendar Routes
### POST `/calendar`
    Body:
      userId, (int)
      name (string)
    Response:
      { id, name, userId }

### GET `/calendar/:id`
    Params:
      id (int)
    Response:
      { id, name, userId }

### PUT `/calendar/:id`
    Params:
      id (int)
    Body:
      name (string)
    Response:
      { id, name, userId }

### GET `/calendar/:id/events`
    Params:
      id, (int)
    Body:
      (undecided)
    Response:
      [{ id, name, calendarId, startTime, endTime }]
    Description:
      This is the core search functionality of getting events for a certain time period. I will work with you for flexibility to decide the best solution


## Event Routes
### POST `/event`
    Body:
      calendar_id, (int)
      name, (string)
      start_time, (string)
      end_time (string)
    Response:
      { id, name, calendarId, startTime, endTime }

### GET `/event/:id`
    Params:
      id (int)
    Response:
      { id, name, calendarId, startTime, endTime }

### PUT `/event/:id`
    Params:
      id (int)
    Body:
      calendar_id, (int)
      name, (string)
      start_time, (string)
      end_time (string)
    Response:
      { id, name, calendarId, startTime, endTime }

### DELETE `/event/:id`
    Params:
      id (int)
    Response:
      (success message)
