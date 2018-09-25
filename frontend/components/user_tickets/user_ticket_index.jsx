import React from 'react';
import EventIndexItem from '../events/event_index_item';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.events;

    }

    componentDidMount() {
        // debugger;
        this.props.fetchUserEvents(this.props.user.id).then(
            action => {
                return this.setState({ events: action.events });
            }
        );
    }


    render() {
        if (!this.state) {
            return null;
        }
        return (
            <div>
                <ul>
                    {Object.keys(this.state.events).map(eventId => {
                        let event = this.state.events[eventId]
                        return (<EventIndexItem key={event.id} event={event} />);
                    })}
                </ul>
            </div>
        )
    }

}

export default UserTicketIndex;