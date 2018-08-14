import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
  }

  render() {
    return (
      <div>Howdy Doody</div>
    )
  }
}

export default EventShow;
