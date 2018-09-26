import { connect } from 'react-redux';
import UserTicketIndex from './user_ticket_index';
import {fetchUserEvents} from '../../actions/event_actions';
import { fetchUserProfileTickets } from '../../actions/ticket_actions';
import { fetchUserTicketConnections } from '../../actions/user_ticket_act'

//fetchUserTickets or backend routing?

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  events: null,
  tickets: null
});

const mapDispatchToProps = dispatch => ({
    fetchUserEvents: userId => dispatch(fetchUserEvents(userId)),
    fetchUserProfileTickets: userId => dispatch(fetchUserProfileTickets(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTicketIndex);