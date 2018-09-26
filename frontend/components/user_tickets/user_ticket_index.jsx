import React from 'react';
import EventIndexItem from '../events/event_index_item';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.events;

    }

    componentDidMount() {
        this.props.fetchUserEvents(this.props.user.id)
        .then(
            action => {
                return this.setState({ events: action.events });
            }
        )
        .then(
            res => this.props.fetchUserProfileTickets(this.props.user.id)
        ).then(
            action => this.setState({user_tickets: action.user_tickets })
        );
    }

    render() {
        if (!this.state) {
            return null;
        }
        return <div>
            <div className="profile-wrapper">
              <div className="profile-info">
                <div>
                  <h1>
                    {this.props.user.firstName} {this.props.user.lastName}
                  </h1>
                </div>

                <div>
                    <ul>
                        <li>
                            <label>tickets</label>
                        </li>
                        <li>
                            <label>like</label>
                        </li>
                        <li>
                            <label>following</label>
                        </li>
                    </ul>
                </div>
              </div>
              <div className="profile-section">
                <div>
                  <label>Tickets</label>
                </div>

                <div className="scrollmenu">
                  <ul>
                    {Object.keys(this.state.events).map(eventId => {
                      let event = this.state.events[eventId];
                      return <EventIndexItem key={event.id} event={event} userTickets={1}/>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>;
    }

}

export default UserTicketIndex;