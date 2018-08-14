import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`/events/${this.props.event.id}`)
  }

  render () {
    return (
      <div className="event-index-item">
        <div className="index-item-content-wrapper" onClick={this.handleClick}>
          <div className="event-image-wrapper">
            <div className="event-image">
            </div>
          </div>
          <div className="event-info">
            <time className="event-time">{this.props.event.startDate} {this.props.event.startTime}</time>

            <h2 className="event-title">{this.props.event.title}</h2>


            <div>
              <h4>{this.props.event.venueName || this.props.event.address}, {this.props.event.city}</h4>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndexItem);
