import React from 'react';
import EventIndexItem from '../events/event_index_item';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
        this.ticketTotal = 0;
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
        )
        .then(
            action => {
                let tickets = Object.keys(action.tickets);
                for (let i = 0; i < tickets.length; i ++) {
                    // debugger;
                    let ticketId = tickets[i];
                    this.props.fetchUserTicketCount(this.props.user.id, ticketId)

                        .then(action => {
                            this.ticketTotal += action.count.count;
                        })
                }
            }
        );
    }

    // totalTickets() {
    //     // debugger;
    //     let total = 0;
    //     if (!this.props.userTickets) {
    //         return total;
    //     }
    //     let keys = Object.keys(this.props.userTickets);
    //     for (let i = 0; i < keys.length; i++) {
    //         let key = keys[i];
    //         total += this.props.userTickets[key].count;
    //     }
    //     return total;
    // }

    render() {
        if (!this.props || !this.props.events) {
          return null;
        }
        // debugger;
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
                            <label>{this.ticketTotal}</label>
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
                    {Object.keys(this.props.events).map(eventId => {
                      let event = this.props.events[eventId];
                      return <EventIndexItem key={event.id} event={event} userTickets={this.props.userTickets}/>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>;
    }

}

export default UserTicketIndex;