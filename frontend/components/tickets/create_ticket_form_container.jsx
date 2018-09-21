import React from 'react';
import { connect } from 'react-redux';
import CreateTicketForm from './create_ticket_form';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.currentUser],
    eventId: state.eventId,
    errors: state.errors.ticketErrors
});

const mapDispatchToProps = dispatch => ({
    createTicket: ticket => dispatch(createTicket(ticket))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicketForm);