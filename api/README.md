
# Endpoints

## user
`POST /user`
params: email, password
`POST /auth`
params: email, password
`GET /user/:id`
query param: id
`DELETE /logout`
params: userId or sessionToken
`GET /user/:id/calendars`
query param: id

## calendar
`POST /calendar`
params: user_id, name, hex
`GET /calendar/:id/info`
query param: id
`PUT /calendar/:id`
query param: id
params: user_id, name, hex
`GET /calendar/:id/month/:month`
query params: id, month (int)
`GET /calendar/:id/week/:week`
`GET /calendar/:id/day/:day`

## event
`POST /event`
`GET /event/:id`
`PUT /event/:id`
`DELETE /event/:id`

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
    { name, user_id }

### GET `/calendar/:id`
  Params:
    id (int)
  Response:
    { name, user_id }

### PUT `/calendar/:id`
  Params:
    id (int)
  Body:
    name (string)
  Response:
    { name, user_id }

### GET `/calendar/:id/range`
  Params:
    id, (int)
  Body:
    (undecided)
  Response:
    [{ start_time, end_time, name, calendar_id }]
  Description:
    This is the core search functionality of getting events for a certain time period. I will work with you for flexibility to decide the best solution
