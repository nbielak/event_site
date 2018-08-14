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
              <img className="default-image" src="http://www.so-events.at/SYSTEM/image_background/standard/background_02.jpg" />
            </div>
          </div>
          <div className="event-info">
            <time className="event-time">{this.props.event.startDate} {this.props.event.startTime}</time>

            <h2 className="event-title">{this.props.event.title}</h2>


            <div className="event-location">
              {this.props.event.venueName || this.props.event.address}, {this.props.event.city}
            </div>

          </div>

          <div className="event-footer">
            <div className="event-footer-tags">
            </div>

            <div className="event-footer-actions">
              <button id="event-footer-button" className="event-footer-button"></button>
              <button id="event-footer-button" className="event-footer-button"></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndexItem);
