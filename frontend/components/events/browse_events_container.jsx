import { connect } from 'react-redux';
import BrowseEvents from './browse_events';
import { fetchAllEvents } from '../../actions/event_actions';
import { fetchAllEventCategories } from '../../actions/event_category_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { getSplashCityEvents, sortEventsByCategory } from '../../reducers/selectors';

const mapStateToProps = state => {
    // let events = getSplashCityEvents({ events: state.entities.events, city: "San Francisco" });
    // let categories = sortEventsByCategory({
    //     events, 
    //     eventCategories: state.entities.eventCategories,
    //     categories: state.entities.categories
    // })

    return {
        events: getSplashCityEvents({ events: state.entities.events, city: "San Francisco" }),
        eventCategories: state.entities.eventCategories,
        categories: state.entities.categories
    }
};

const MapDispatchToProps = dispatch => ({
    fetchAllEvents: () => dispatch(fetchAllEvents()),
    fetchAllEventCategories: () => dispatch(fetchAllEventCategories()),
    fetchAllCategories: () => dispatch(fetchAllCategories())
})

export default connect(mapStateToProps, MapDispatchToProps)(BrowseEvents);
