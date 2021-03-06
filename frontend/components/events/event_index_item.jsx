import React from 'react';
import { withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event
    this.handleClick = this.handleClick.bind(this);
    this.categoryClick = this.categoryClick.bind(this);
    this.createStartDate = this.createStartDate.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.setTime = this.setTime.bind(this);
    this.category = null;
  }

  handleClick(e) {
    this.props.history.push(`/events/${this.props.event.id}`)
  }

  categoryClick(e) {
    e.stopPropagation();
    this.props.history.push(`/${this.category}/events`);
  }

  createStartDate() {
    const days =["", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    let weekday = days[this.state.startDateObj.cwday];
    return `${weekday}, ${this.setMonth()} ${this.state.startDateObj.date}, ${this.setTime()}`;

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

  findCategory(event) {
    if (Object.keys(this.props.categories).length === 1) {
      let id = Object.keys(this.props.categories)[0];
      return this.props.categories[id];
    }
    let categoryId = null;
    let keys = Object.keys(this.props.eventCategories);

    for (let i = 0; i < keys.length; i++) {
      let id = keys[i];
      let eventCategory = this.props.eventCategories[id];
      if (eventCategory.eventId === event.id) {
        categoryId = eventCategory.categoryId
      }
    }

    return categoryId ? this.props.categories[categoryId].name : "none";
  }


  render () {
    if (!this.props 
      || !this.props.event 
      || Object.keys(this.props.categories).length < 1 
      || Object.keys(this.props.eventCategories).length < 1) {
      return null;
    }
    this.category = this.findCategory(this.props.event);
    return (
      <div className="event-index-item">
        <div className="index-item-content-wrapper">
          <div className="for-click-and-shadow" onClick={this.handleClick}>
            <div className="event-image-wrapper">
              <div className="event-image" style={{backgroundImage: `url(${this.state.photoUrl})`}}>
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
            <div className="event-footer-tags" onClick={this.categoryClick}>
              #{this.category}
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
