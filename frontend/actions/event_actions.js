import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS"

const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

const removeEvent = eventId => ({
  type: REMOVE_EVENT,
  eventId
});

const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const fetchAllEvents = () => dispatch => (
  EventApiUtil.fetchAllEvents().then(
    events => dispatch(receiveAllEvents(events)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

export const fetchEvent = (eventId) => dispatch => (
  EventApiUtil.fetchEvent(eventId).then(
    event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

export const fetchUserEvents = userId => dispatch => (
  EventApiUtil.fetchUserEvents(userId).then(
    events => dispatch(receiveAllEvents(events)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

export const createEvent = event => dispatch => (
  EventApiUtil.createEvent(event).then(
    event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event).then(
    event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

export const deleteEvent = eventId => dispatch => (
  EventApiUtil.deleteEvent(eventId).then(
    event => dispatch(removeEvent(eventId)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

