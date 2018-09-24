import { connect } from 'react-redux';
import CreateUserTicketForm from './create_user_ticket_form';
import { createUserTicket } from '../../actions/user_ticket_actions';
import { fetchAllTickets } from '../../actions/ticket_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: state.entities.users[state.session.currentUser].id,
    eventId: ownProps.match.params.eventId
});

const mapDispatchToProps = dispatch => ({
    createUserTicket: userTicket => dispatch(createUserTicket(userTicket)),
    fetchAllTickets: eventId => dispatch(fetchAllTickets(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserTicketForm);