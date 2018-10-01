import React from 'react';
import ErrorList from '../session_form/error_list';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      event: {
        photoFile: null
      }, 
      ticket: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTime = this.setTime.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.updateTicket = this.updateTicket.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  updateEvent(field) {
    return e => {
      let event = this.state.event;
      event[field] = e.target.value;
      this.setState({ event })
    }
  }

  updateTicket(field){
    return e => {
      let ticket = this.state.ticket;
      ticket[field] = e.target.value;
      this.setState({ ticket })
    }
  }

  updateTicketEventId(id) {
    let ticket = this.state.ticket;
    ticket["eventId"] = id;
    this.setState({ ticket });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    let event = this.state.event;

    formData.append("event[title]", event.title);
    if (event.photoFile) {
      formData.append("event[photo]", event.photoFile);
    }
    formData.append("event[description]", event.description);
    formData.append("event[venueName]", event.venueName);
    formData.append("event[address]", event.address);
    formData.append("event[address2]", event.address2);
    formData.append("event[city]", event.city);
    formData.append("event[state]", event.state);
    formData.append("event[country]", event.country);
    formData.append("event[zip]", event.zip);
    formData.append("event[startDate]", event.startDate);
    formData.append("event[endDate]", event.endDate);
    formData.append("event[startTime]", event.startTime);
    formData.append("event[endTime]", event.endTime);
    formData.append("event[userId]", this.props.user.id);
    formData.append("event[organizerName]", event.organizerName);
    formData.append("event[organizerDescription]", event.organizerDescription);
  
    // const event = Object.assign({}, this.state.event);
    this.props.createEvent(formData).then(action => {
      this.updateTicketEventId(action.event.id);
      const ticket = Object.assign({}, this.state.ticket);
      return this.props.createTicket(ticket.eventId, ticket);
    }).then(action => this.props.history.push(`/events/${action.ticket.eventId}`))
  }


  setTime() {
    let hour = ""
    let min = ""
    let meridian = ""
    if (this.state.event.startTimeObj.hour > 12) {
      hour = `${this.state.event.startTimeObj.hour - 12}`;
      meridian = "PM";
    } else if (this.state.event.startTimeObj.hour === 0) {
      hour = "12";
      meridian = "AM";
    } else {
      hour = `${this.state.event.startTimeObj.hour}`;
      meridian = "AM";
    }

    if (this.state.event.startTimeObj.minute < 10) {
      min = `0${this.state.event.startTimeObj.minute}`;
    } else {
      min = `${this.state.event.startTimeObj.minute}`;
    }

    return `${hour}:${min} ${meridian}`;
  }

  handleFile(e) {
    let event = this.state.event;
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      event["photoFile"] = file;
      event["photoUrl"] = fileReader.result;
      this.setState({ event });
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.event.photoUrl ? <img src={this.state.event.photoUrl}/> : null;
    return <div>
        <div className="create-event-top">
          <h2 className="event-top">Create an Event</h2>
        </div>

        <div className="create-event-edit-design" />

        <form className="create-event-form" onSubmit={this.handleSubmit}>
          <div className="border-creator">
            <div className="create-event-form-content-wrapper">
              <div className="create-event-form-content">
                <div className="form-header-info-wrapper">
                  <div className="form-header-info">
                    <span className="detail-block">1</span>
                    <h2 className="form-headers">Event Details</h2>
                  </div>
                </div>

                <div className="event-detail-content">
                  <div className="error-list-wrapper">
                    <ErrorList errors={this.props.eventErrors && this.props.ticketErrors} />
                  </div>

                  <div className="event-title-wrapper">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">
                        EVENT TITLE
                      </label>
                    </div>

                    <div className="event-title-input">
                      <input className="event-title-input-val" value={this.state.event.title || ""} onChange={this.updateEvent("title")} type="text" placeholder="Give it a short, distinct name" />
                    </div>
                  </div>
                </div>

                <div className="event-location-wrapper">
                  <div className="event-info-label-wrapper">
                    <label className="event-info-label">LOCATION</label>
                  </div>

                  <div className="event-location-input">
                    <div className="event-address-city">
                      <input className="address-cell" onChange={this.updateEvent("venueName")} type="text" value={this.state.event.venueName || ""} placeholder="Venue Name" />
                      <input className="address-cell" onChange={this.updateEvent("address")} type="text" value={this.state.event.address || ""} placeholder="Address" />
                      <input className="address-cell" onChange={this.updateEvent("address2")} type="text" value={this.state.event.address2 || ""} placeholder="Address 2" />
                      <input className="address-cell" onChange={this.updateEvent("city")} type="text" value={this.state.event.city || ""} placeholder="City" />
                    </div>

                    <div className="event-state-zip-country">
                      <div className="state-zip-input">
                        <input className="zip-cell" onChange={this.updateEvent("state")} type="text" value={this.state.event.state || ""} placeholder="State" />
                      </div>

                      <div className="state-zip-input">
                        <input className="zip-cell" onChange={this.updateEvent("zip")} type="number" value={this.state.event.zip || ""} placeholder="Zip/Postal" />
                      </div>

                      <div className="country-select-wrapper">
                        <select onChange={this.updateEvent("country")} className="country-select">
                          <option selected disabled>
                            Choose Country
                          </option>
                          <option value="US">United States</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="event-date-wrapper">
                    <div className="event-date-input-wrapper">
                      <div className="event-info-label-wrapper">
                        <label className="event-info-label">STARTS</label>
                      </div>

                      <div className="date-time-inputs">
                        <input value={this.state.event.startDate || ""} className="date-input" type="date" onChange={this.updateEvent("startDate")} />

                        <input value={this.state.event.startTime || ""} className="time-input" type="time" onChange={this.updateEvent("startTime")} />
                      </div>
                    </div>

                    <div className="event-date-input-wrapper">
                      <div className="event-info-label-wrapper">
                        <label className="event-info-label">ENDS</label>
                      </div>

                      <div className="date-time-inputs">
                        <input value={this.state.event.endDate || ""} className="date-input" type="date" onChange={this.updateEvent("endDate")} />

                        <input value={this.state.event.endTime || ""} className="time-input" type="time" onChange={this.updateEvent("endTime")} />
                      </div>
                    </div>
                  </div>

                  <div className="event-image-wrapper">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label" >Event Image</label>
                    </div>

                    <div className="event-image-input-wrapper">
                      <input type="file" onChange={this.handleFile} />
                    </div>

                    <div className="preview-wrapper">
                      {preview}
                    </div>
                      
                  </div>

                  <div className="event-description-wrapper">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">
                        EVENT DESCRIPTION
                      </label>
                    </div>

                    <div className="event-description">
                      <textarea value={this.state.event.description || ""} className="event-description-input" onChange={this.updateEvent("description")} />
                    </div>
                  </div>

                  <div className="event-organizer">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">
                        ORGANIZER NAME
                      </label>
                    </div>

                    <div className="event-title-input">
                      <input className="event-title-input-val" value={this.state.event.organizerName || ""} onChange={this.updateEvent("organizerName")} />
                    </div>
                  </div>

                  <div className="event-info-label-wrapper">
                    <label className="event-info-label">
                      ORGANIZER DESCRIPTION
                    </label>
                  </div>

                  <textarea value={this.state.event.organizerDescription || ""} className="org-desc-input" onChange={this.updateEvent("organizerDescription")} />
                </div>
              </div>

              <div className="create-tickets-wrapper">
                <div className="create-event-form-content">
                  <div className="form-header-info-wrapper">
                    <div className="form-header-info">
                      <span className="detail-block">2</span>
                      <h2 className="form-headers">Create Tickets</h2>
                    </div>
                  </div>

                  <div className="event-location-input">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">NAME</label>
                    </div>
                    
                    <input className="address-cell" onChange={this.updateTicket("name")} type="text" placeholder="General Admission" />
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">QUANTITY</label>
                    </div>
                    
                    <input className="address-cell" onChange={this.updateTicket("quantity")} type="number" min="1" placeholder="100" />

                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">PRICE</label>
                    </div>
                    <input className="address-cell" onChange={this.updateTicket("price")} type="number" min="0" placeholder="15.00" />
                  </div>
                </div>
              </div>

              <div className="add-categories-wrapper" />
            </div>
          </div>

          <div className="form-footer">
            <div className="form-footer-text-wrapper">
              <p className="form-footer-text">
                Nice job! You're almost done!
              </p>
            </div>

            <div className="create-form-submit-wrapper">
              <input className="create-form-submit" type="submit" value="Make Your Event Live" />
            </div>
          </div>
        </form>
      </div>;
  }
}

export default CreateEventForm;
