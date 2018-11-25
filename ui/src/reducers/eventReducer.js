import merge from 'lodash/merge';


const EventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_EVENT':
      return merge (state, { activeEvent: action.payload.event });
    case 'RECEIVE_EVENTS':
      return merge (state, { events: action.payload.events });
    case 'EVENT_ERROR':
      return merge(state, { error: action.payload.error });
    default:
      return state;
  }
}


export default EventReducer;
