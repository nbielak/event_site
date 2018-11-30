import { connect } from 'react-redux';
import CategoryEvents from './category_events';
import { getEventsByCategory } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
    events: state.entities.events,
    category: ownProps.match.params.category
});

const mapDispatchToProps = dispatch => ({
    getEventsByCategory: category => dispatch(getEventsByCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEvents);

