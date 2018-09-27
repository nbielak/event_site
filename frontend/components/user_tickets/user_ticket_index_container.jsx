import { connect } from 'react-redux';
import UserTicketIndex from './user_ticket_index';
import {fetchUserEvents} from '../../actions/event_actions';
import { fetchUserProfileTickets } from '../../actions/ticket_actions';
import { fetchUserTicketCount } from '../../actions/user_ticket_actions';

//fetchUserTickets or backend routing?

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  events: state.entities.events,
  tickets: state.entities.tickets,
  userTickets: state.entities.userTickets
});

const mapDispatchToProps = dispatch => ({
    fetchUserEvents: userId => dispatch(fetchUserEvents(userId)),
    fetchUserProfileTickets: userId => dispatch(fetchUserProfileTickets(userId)),
    fetchUserTicketCount: (userId, ticketId) => dispatch(fetchUserTicketCount(userId, ticketId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTicketIndex);