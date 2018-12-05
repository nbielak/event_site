import { connect } from 'react-redux';
import CategoryEvents from './category_events';
import { getEventsByCategory } from '../../actions/event_actions';
import { getSplashCityEvents } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    events: getSplashCityEvents({events: state.entities.events, city: 'San Francisco'}),
    category: ownProps.match.params.category
});

const mapDispatchToProps = dispatch => ({
    getEventsByCategory: category => dispatch(getEventsByCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEvents);

