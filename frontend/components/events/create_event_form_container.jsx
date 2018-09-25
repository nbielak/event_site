import React from 'react';
import { connect } from 'react-redux';
import CreateEventForm from './create_event_form';
import { createEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';


const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  eventErrors: state.errors.eventErrors,
  ticketErrors: state.errors.ticketErrors
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  createTicket: (eventId, ticket) => dispatch(createTicket(eventId, ticket))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);
