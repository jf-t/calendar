# React/Redux

Here I am going to try to plan out as much as I can before I go back to working on the real site.

Just in case i forget, to run:
```
npm start
```


## Components:

### Layout Component:
There is a layout component that will contain the `Header` and `Footer` components, as well as displaying `this.props.children` as it will be used as a reusable component throughout.

### Header Component:
Displays 3 filters, add button, and logo (for now). These 3 filters fire `this.props.changeFilter` and the add button fires `this.props.addEvent` to send the user to the add event page.

### Login:
The login component is exactly what you would expect from auth. Username/password with submit button. If the login page is accessed with localStorage user already existing, it should automatically route the user to `/`

### Calendar:
The calendar is going to contain all of the necessary work for the calendars. This is going to use the <Layout> component and use `this.props.filter` as a way to change between Week, Day, and Month views.

### Month View:
The month view component needs to contain some solid logic for displaying the entire month. The month should display in 4-6 rows the entire month by each day, and the first few events for those days. The events with dates need to be compiled in a formatter function, by going through the events in every calendar that is currently being displayed and by using startDate and endDate, show each day as a compilation of all the events. This logic is going to be pretty tough, and I am going to have to explain how I am going to do it below.

## Logical Functions:

### Displaying Month View:
When either the visible calendars, or the date range, change, there needs to be logic to format the month that is currently in view with all of the events that are in the visible calendars. This will take some sort of fancy logic for probably doing a double loop over the events and the days and displaying each day as an object, with an events array to display, along with the day number. Each event has to carry an ID, name, time, and calendar color.

Events will be passed in as an array of startDate, endDate, name, ID, and calendar. The algo will have to loop through this array and for each event, pass it into the necessary dates. I don't really know how this will happen yet, I will come back to it.

This logic will have to be repeated for the day and week views, which probably will end up having to be the same function. Passing in a range of dates and the array of calendar objects, it should return nested arrays of days to be displayed (or just one day if dayView).
