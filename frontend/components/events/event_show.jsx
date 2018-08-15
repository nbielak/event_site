import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.findOrganizer = this.findOrganizer.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
  }

  findOrganizer() {
    let user = this.props.fetchUser(this.state.userId);
    return user.firstName;
  }

  render() {
    return (
      <div className="event-listing-background">
        <div className="event-listing-grid">
          <div className="event-listing-body">
            <div className="event-listing-header-info">
              <div className="event-listing-header-image">
                <img className="show-default-image" src="http://www.so-events.at/SYSTEM/image_background/standard/background_02.jpg" />
              </div>
              <div className="event-header-info-block">
                <div className="info-block-wrapper">
                  <div className="event-header-start-date">
                    <time className="date" dateTime={this.state.startDate}>
                      <p>{this.state.startDate}</p>
                    </time>

                  </div>

                  <div className="event-header-title">
                    <h1>
                      {this.state.title}
                    </h1>

                    <h2>
                      ORGANIZER
                    </h2>
                  </div>
                </div>

              </div>
            </div>

            <div className="event-listing-bookmark">
              <div className="bookmark-content-wrapper">

                <div className="placeholder"></div>

                <div className="bookmark-ticket-button-wrapper">
                  <button className="bookmark-ticket-button">tickets</button>
                </div>
              </div>


            </div>

            <div className="event-listing-detailed-info">
              <div className="info-wrapper">
                <div className="event-description">
                  <h2>About this Event</h2>
                  <p>{this.state.description}</p>
                </div>

                <div className="event-time-location">
                  <div className="time">
                    <p>Date and Time</p>

                    <p>{this.state.startDate} {this.state.startTime}</p>

                  </div>

                  <div className="location">
                    <p>Location</p>
                    <p>{this.state.venueName}</p>
                    <p>{this.state.address}</p>
                    <p>{this.state.city}, {this.state.state} {this.state.zip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
