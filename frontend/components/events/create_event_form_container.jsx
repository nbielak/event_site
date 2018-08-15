import React from 'react';
import { connect } from 'react-redux';
import CreateEventForm from './create_event_form';
import { createEvent } from '../../actions/event_actions';


const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUser],
  errors: state.errors.eventErrors
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);
