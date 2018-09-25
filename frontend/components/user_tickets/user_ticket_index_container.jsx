import { connect } from 'react-redux';
import UserTicketIndex from './user_ticket_index';
//use User#attending_events to get events

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],

});