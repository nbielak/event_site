import { connect } from 'react-redux';
import CreateUserTicketForm from './create_user_ticket_form';
import { createUserTicket } from '../../actions/user_ticket_actions';
import { fetchAllTickets } from '../../actions/ticket_actions';
import { withRouter } from 'react-router';
import {getEventTickets} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.entities.users[state.session.currentUser].id,
        eventId: ownProps.match.params.eventId,
        tickets: ownProps.tickets,
        ticketId: ownProps.ticketId
    };
}

const mapDispatchToProps = dispatch => ({
    createUserTicket: userTicket => dispatch(createUserTicket(userTicket)),
    fetchAllTickets: eventId => dispatch(fetchAllTickets(eventId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateUserTicketForm));