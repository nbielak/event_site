import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchAllEvents } from '../../actions/event_actions';
import { getSplashCityEvents } from '../../reducers/selectors';
import { fetchAllCategories } from '../../actions/category_actions'; 
import { fetchAllEventCategories } from '../../actions/event_category_actions'; 

const mapStateToProps = state => {
  return ({
    events: getSplashCityEvents({events: state.entities.events, city: "San Francisco"}),
    categories: state.entities.categories,
    eventCategories: state.entities.eventCategories
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => dispatch(fetchAllEvents()),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  fetchAllEventCategories: () => dispatch(fetchAllEventCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
