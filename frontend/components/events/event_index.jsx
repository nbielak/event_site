import React from 'react';

class EventIndex extends React.Component {
  componentDidMount () {
    this.props.fetchAllEvents
  }
}
