import { connect } from 'react-redux';
import { getUserEvents } from '../../reducers/selectors';
import { fetchAllEvents, deleteEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';
import ManageEvents from './manage_events';

const mapStateToProps = state => ({
  events: getUserEvents({events: state.entities.events, currentUserId: state.session.currentUser})
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: events => dispatch(fetchAllEvents(events)),
  deleteEvent: eventId => dispatch(deleteEvent(eventId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageEvents));
