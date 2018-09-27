import React from 'react';
import { withRouter } from 'react-router-dom';

class UserTicketIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.createStartDate = this.createStartDate.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`/events/${this.props.event.id}`)
  }

  createStartDate() {
    const days =["", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    let weekday = days[this.props.event.startDateObj.cwday];
    return `${weekday}, ${this.setMonth()} ${this.props.event.startDateObj.date}, ${this.setTime()}`;

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
    return months[this.props.event.startDateObj.month]
  }

  setTime() {
    let hour = ""
    let min = ""
    let meridian = ""
    if (this.props.event.startTimeObj.hour > 12) {
      hour = `${this.props.event.startTimeObj.hour - 12}`;
      meridian = "PM";
    } else if (this.props.event.startTimeObj.hour === 0) {
      hour = "12";
      meridian = "AM";
    } else {
      hour = `${this.props.event.startTimeObj.hour}`;
      meridian = "AM";
    }

    if (this.props.event.startTimeObj.minute < 10) {
      min = `0${this.props.event.startTimeObj.minute}`;
    } else {
      min = `${this.props.event.startTimeObj.minute}`;
    }

    return `${hour}:${min} ${meridian}`;
  }


  render () {
    console.log(this.props);
    if (!this.props || Object.keys(this.props.userTickets).length === 0) {
      // debugger;
      return null;
    }
    // debugger;
    return (
      <div id="user-ticket-index-item" className="event-index-item">
        <div className="index-item-content-wrapper">
          <div className="for-click-and-shadow" onClick={this.handleClick}>
            <div className="event-image-wrapper">
              <div className="event-image">
                <img className="default-image" src="http://www.so-events.at/SYSTEM/image_background/standard/background_02.jpg" />
              </div>
            </div>
            <div className="event-info">
              <time className="event-time">{this.createStartDate()}</time>

              <h2 className="event-title">{this.props.event.title}</h2>


              <div className="event-location">
                {this.props.event.venueName || this.props.event.address}, {this.props.event.city}
              </div>

            </div>

          </div>
          <div className="event-footer">
            <div className="event-footer-tags">
              <label>
                Tickets: {this.props.userTickets[this.props.event.id].count}
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UserTicketIndexItem);
