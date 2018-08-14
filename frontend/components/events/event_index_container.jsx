import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchAllEvents } from '../../actions/event_actions';
import { getCityEvents } from '../../reducers/selectors';

const mapStateToProps = state => {
  return ({
    events: getCityEvents({events: state.entities.events, city: "San Francisco"})
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => dispatch(fetchAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
