import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal, closeModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId],
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  openModal: (modal, eventId) => dispatch(openModal(modal, eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
