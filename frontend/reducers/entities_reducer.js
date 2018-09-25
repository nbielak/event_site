import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import TicketsReducer from './tickets_reducer';
import UserTicketsReducer from './user_tickets_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: EventsReducer,
  tickets: TicketsReducer,
  user_tickets: UserTicketsReducer
});

export default entitiesReducer;
