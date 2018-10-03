import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import TicketsReducer from './tickets_reducer';
import UserTicketsReducer from './user_tickets_reducer';
import CategoriesReducer from './categories_reducer';
import EventCategoriesReducer from './event_categories_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: EventsReducer,
  tickets: TicketsReducer,
  userTickets: UserTicketsReducer,
  categories: CategoriesReducer,
  eventCategories: EventCategoriesReducer
});

export default entitiesReducer;
