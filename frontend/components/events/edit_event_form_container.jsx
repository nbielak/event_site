import { connect } from 'react-redux';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import EditEventForm from './edit_event_form';

const mapStateToProps = (state, ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId]
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);
