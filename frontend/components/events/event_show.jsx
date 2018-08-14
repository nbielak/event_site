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
      <div>
        <div>
          <div className="event-listing-body">
            <div className="event-listing-header-info">
              <div className="event-listing-header-image">
              </div>
              <div>
                <p>{this.state.startDate}</p>
              </div>

              <div>
                <h1>
                  {this.state.title}
                </h1>
              </div>
            </div>

            <div className="event-listing-bookmark">
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
