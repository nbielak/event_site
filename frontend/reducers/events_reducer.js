import {RECEIVE_ALL_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, action.events);
    case RECEIVE_EVENT:
      let newEvent = {[action.event.id]: action.event};
      return merge({}, state, newEvent);
    case REMOVE_EVENT:
      let newState = merge({}, state);
      newState.delete(action.eventId);
      return newState;
    default:
    return state;
  }
}

export default EventsReducer;
