import React from 'react';
import { connect } from 'react-redux';
import CreateEventForm from './create_event_form';
import { createEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';
import { createEventCategory } from '../../actions/event_category_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { categoryObjectBuilder } from '../../reducers/selectors';


const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  categories: categoryObjectBuilder({categories: state.entities.categories}),
  eventErrors: state.errors.eventErrors,
  ticketErrors: state.errors.ticketErrors
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  createTicket: (eventId, ticket) => dispatch(createTicket(eventId, ticket)),
  createEventCategory: eventCategory => dispatch(createEventCategory(eventCategory)),
  fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);
