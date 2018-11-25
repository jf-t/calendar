# Schema

## user
id
email
pw_hash
session

### calendar
id
user_id
name

### event
id
calendar_id
start_time
end_time
name


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
