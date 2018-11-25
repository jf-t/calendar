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
      { email, user_id }

### POST `/auth`
    Body:
      email, (string)
      password (string)
    Response
      { email, user_id, session_token }

### GET `/user/:id`
    Params:
      id (int)
    Response:
      { email, user_id }

### DELETE `/logout`
    Body:
      id (int)
    Response:
      { email, user_id }

## Calendar Routes
### POST `/calendar`
    Body:
      user_id, (int)
      name (string)
    Response:
      { id, name, user_id }

### GET `/calendar/:id`
    Params:
      id (int)
    Response:
      { id, name, user_id }

### PUT `/calendar/:id`
    Params:
      id (int)
    Body:
      name (string)
    Response:
      { id, name, user_id }

### GET `/calendar/:id/range`
    Params:
      id, (int)
    Body:
      (undecided)
    Response:
      [{ id, name, calendar_id, start_time, end_time }]
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
      { id, name, calendar_id, start_time, end_time }

### GET `/event/:id`
    Params:
      id (int)
    Response:
      { id, name, calendar_id, start_time, end_time }

### PUT `/event/:id`
    Params:
      id (int)
    Body:
      calendar_id, (int)
      name, (string)
      start_time, (string)
      end_time (string)
    Response:
      { id, name, calendar_id, start_time, end_time }

### DELETE `/event/:id`
    Params:
      id (int)
    Response:
      (success message)
