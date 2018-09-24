import React from 'react';
import ModalContainer from '../modal/modal_container';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.createStartDate = this.createStartDate.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.setTime = this.setTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.modal = this.props.modal
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId).then(action => this.setState(action.event))
  }

  createStartDate() {
    const days =["", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    let weekday = days[this.state.startDateObj.cwday];
    return `${weekday}, ${this.setMonth()} ${this.state.startDateObj.date}, ${this.state.startDateObj.year}, ${this.setTime()}`;

  }

  handleClick(e) {
    e.preventDefault;
    // this.props.history.push(`/events/${this.state.id}/tickets`)
    this.openModal();
  }

  setMonth() {
    const months = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: 'Nov',
      12: 'Dec'
    }
    return months[this.state.startDateObj.month]
  }

  setTime() {
    let hour = ""
    let min = ""
    let meridian = ""
    if (this.state.startTimeObj.hour > 12) {
      hour = `${this.state.startTimeObj.hour - 12}`;
      meridian = "PM";
    } else if (this.state.startTimeObj.hour === 0) {
      hour = "12";
      meridian = "AM";
    } else {
      hour = `${this.state.startTimeObj.hour}`;
      meridian = "AM";
    }

    if (this.state.startTimeObj.minute < 10) {
      min = `0${this.state.startTimeObj.minute}`;
    } else {
      min = `${this.state.startTimeObj.minute}`;
    }

    return `${hour}:${min} ${meridian}`;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  render() {
    if (!this.state) {
      return null;
    }

    if(this.isModalOpen) {
      debugger;
      return <ModalContainer isOpen={this.isModalOpen}/>
    }

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
                    <time className="date">
                      <p>{this.setMonth()}</p>
                      <p>{this.state.startDateObj.date}</p>
                    </time>

                  </div>

                  <div className="event-header-title">
                    <h1>
                      {this.state.title}
                    </h1>

                    <h2>
                      {this.state.organizerName}
                    </h2>
                  </div>
                </div>

              </div>
            </div>

            <div className="event-listing-bookmark">
              <div className="bookmark-content-wrapper">

                <div className="placeholder"></div>

                <div className="bookmark-ticket-button-wrapper">
                  <button onClick={this.handleClick} className="bookmark-ticket-button">tickets</button>
                </div>
              </div>


            </div>

            <div className="event-listing-detailed-info">
              <div className="info-wrapper">
                <div className="event-description-and-tags">
                  <div className="event-description-wrapper">
                    <div className="event-description">
                      <h2 className="event-label">Description</h2>
                      <p className="event-description-body">{this.state.description}</p>
                    </div>

                    <div className="event-tags">
                    </div>
                  </div>
                </div>

                <div className="event-time-location">
                  <div className="time">
                    <p className="event-label">Date and Time</p>
                    <div className="event-date">
                      <p>{this.createStartDate()}</p>
                    </div>


                  </div>

                  <div className="event-location">
                    <p className="event-label">Location</p>
                    <div className="location">
                      <p>{this.state.venueName}</p>
                      <p>{this.state.address}</p>
                      <p>{this.state.city}, {this.state.state} {this.state.zip}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="organizer-info-wrapper">
              <div className="organizer-name-desc-wrapper">
                <div className="organizer-name-desc">
                  <div className="organizer-name">
                    <a className="o-name">{this.state.organizerName}</a>
                  </div>

                  <div className="organizer-event-description">
                    <p className="o-ev-desc">Organizer of {this.state.title}</p>
                  </div>

                  <div className="organizer-desc">
                    <p className="o-desc">{this.state.organizerDescription}</p>
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
