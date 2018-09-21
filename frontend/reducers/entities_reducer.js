import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import TicketReducer from './tickets_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: EventsReducer,
  tickets: TicketsReducer
});

export default entitiesReducer;
