import { connect } from 'react-redux';
import UserTicketIndex from './user_ticket_index';
import {fetchUserEvents} from '../../actions/event_actions';

//fetchUserTickets or backend routing?

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  events: null
});

const mapDispatchToProps = dispatch => ({
    fetchUserEvents: userId => dispatch(fetchUserEvents(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTicketIndex);