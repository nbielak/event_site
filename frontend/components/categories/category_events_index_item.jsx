import React from 'react';

class CategoryEventsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.event;
        this.handleClick = this.handleClick.bind(this);
        this.createStartDate = this.createStartDate.bind(this);
        this.setMonth = this.setMonth.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    handleClick(e) {
        this.props.history.push(`/events/${this.props.event.id}`)
    }

    createStartDate() {
        const days = ["", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

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

    render() {
        return (
            <div onClick={this.handleClick}>
                <div className="event-image-wrapper">
                    <div className="event-image" style={{ backgroundImage: `url(${this.state.photoUrl})` }}>
                    </div>
                </div>

                <h2 className="event-title">{this.state.title}</h2>
                <time className="event-time">{this.createStartDate()}</time>
                <div className="event-location">
                    {this.props.event.venueName || this.props.event.address}, {this.props.event.city}
                </div>
            </div>
        )
    }
}

export default CategoryEventsIndexItem;