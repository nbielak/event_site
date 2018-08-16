import React from 'react';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state)
    this.props.createEvent(event).then(action => this.props.history.push(`/events/${action.event.id}`))
  }

  render() {
    return (
      <div>
        <div className="create-event-top">
          <h2 className="event-top">Create an Event</h2>
        </div>

        <div className="create-event-edit-design">
        </div>


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

                  <div className="event-title-wrapper">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">EVENT TITLE
                      </label>
                    </div>

                    <div className="event-title-input">
                      <input className="event-title-input-val" value={this.state.title || ""}
                        onChange={this.update('title')}
                        type="text"
                        placeholder="Give it a short, distinct name"/>
                    </div>

                  </div>
                </div>

                <div className="event-location-wrapper">
                  <div className="event-info-label-wrapper">
                    <label className="event-info-label">LOCATION
                    </label>
                  </div>


                  <div className="event-location-input">
                    <div className="event-address-city">
                      <input className="address-cell"
                        onChange={this.update('venueName')}
                        type="text"
                        value={this.state.venueName || ""}
                        placeholder="Venue Name"/>
                      <input className="address-cell"
                        onChange={this.update('address')}
                        type="text"
                        value={this.state.address || ""}
                        placeholder="Address"/>
                      <input className="address-cell"
                        onChange={this.update('address2')}
                        type="text"
                        value={this.state.address2 || ""}
                        placeholder="Address 2"/>
                      <input className="address-cell"
                        onChange={this.update('city')}
                        type="text"
                        value={this.state.city || ""}
                        placeholder="City"/>
                    </div>

                    <div className="event-state-zip-country">
                      <div className="state-zip-input">
                        <input className="zip-cell"
                          onChange={this.update('state')}
                          type="text"
                          value={this.state.state || ""}
                          placeholder="State"/>
                      </div>

                      <div className="state-zip-input">
                        <input className="zip-cell"
                          onChange={this.update('zip')}
                          type="number" value={this.state.zip || ""}
                          placeholder="Zip/Postal"/>
                      </div>

                      <div className="country-select-wrapper">
                        <select onChange={this.update('country')} className="country-select">
                          <option selected disabled>Choose Country</option>
                          <option value="US">United States</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <div className="event-date-wrapper">
                    <div className="event-date-input-wrapper">
                      <div className="event-info-label-wrapper">
                        <label className="event-info-label">STARTS
                        </label>
                      </div>


                      <div className="date-time-inputs">

                        <input value={this.state.startDate || ""}
                          className="date-input" type="date"
                          onChange={this.update('startDate')}/>

                        <input value={this.state.startTime || ""}
                          className="time-input" type="time"
                          onChange={this.update('startTime')}/>

                      </div>
                    </div>

                    <div className="event-date-input-wrapper">
                      <div className="event-info-label-wrapper">
                        <label className="event-info-label">ENDS
                        </label>
                      </div>


                      <div className="date-time-inputs">

                        <input value={this.state.endDate || ""}
                          className="date-input" type="date"
                          onChange={this.update('endDate')}/>

                        <input value={this.state.endTime || ""}
                          className="time-input" type="time"
                          onChange={this.update('endTime')}/>

                      </div>
                    </div>
                  </div>

                  <div className="event-image-wrapper">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">
                      </label>
                    </div>

                    <div className="event-image-input-wrapper">
                    </div>

                  </div>

                  <div className="event-description-wrapper">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">EVENT DESCRIPTION
                      </label>
                    </div>

                    <div className="event-description">
                      <textarea value={this.state.description || ""}
                        className="event-description-input"
                        onChange={this.update('description')}>
                      </textarea>
                    </div>
                  </div>

                  <div className="event-organizer">
                    <div className="event-info-label-wrapper">
                      <label className="event-info-label">ORGANIZER NAME
                      </label>
                    </div>

                    <div className="event-title-input">
                      <input className="event-title-input-val"
                        value={this.state.organizerName || ""}
                        onChange={this.update('organizerName')}/>
                    </div>
                  </div>

                  <div className="event-info-label-wrapper">
                    <label className="event-info-label">ORGANIZER DESCRIPTION
                    </label>
                  </div>

                  <textarea value={this.state.organizerDescription || ""}
                    className="org-desc-input"
                    onChange={this.update('organizerDescription')}>
                  </textarea>

                </div>
              </div>

              <div className="create-tickets-wrapper">
              </div>

              <div className="add-categories-wrapper">
              </div>
            </div>
          </div>


          <div className="form-footer">
            <div className="form-footer-text-wrapper">
              <p className="form-footer-text">Nice job! You're almost done!</p>
            </div>

            <div className="create-form-submit-wrapper">
              <input className="create-form-submit" type="submit" value="Make Your Event Live"/>
            </div>
          </div>

        </form>

      </div>
    );
  }
}

export default CreateEventForm;
