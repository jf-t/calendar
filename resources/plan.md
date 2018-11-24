# Scheduling application

This is just going to be used as a way for me to prove React/Redux knowledge with a simple API implementation. The backend logic should be pretty light, since it is mostly just basic CRUD operations.

## Schema

### user
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


## Endpoints

### user
`POST /user`
`POST /auth`
`GET /user/:id`
`DELETE /logout`
`GET /user/:id/calendars`

### calendar
`POST /calendar`
`GET /calendar/:id/info`
`PUT /calendar/:id`
`GET /calendar/:id/month/:month`
`GET /calendar/:id/week/:week`
`GET /calendar/:id/day/:day`

### event
`POST /event`
`GET /event/:id`
`PUT /event/:id`
`DELETE /event/:id`


## Frontend Pages
* splash page
* user login
* user signup
* calendar month
* calendar week
* calendar day
* event page (add, view, edit)
