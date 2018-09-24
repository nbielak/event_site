import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import EventErrorsReducer from './event_errors_reducer';
import TicketErrorsReducer from './ticket_errors_reducer';
import UserTicketErrorsReducer from './user_ticket_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  userErrors: userErrorsReducer,
  eventErrors: EventErrorsReducer,
  ticketErrors: TicketErrorsReducer,
  userTicketErrors: UserTicketErrorsReducer
});

export default errorsReducer;
