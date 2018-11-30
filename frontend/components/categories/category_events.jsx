import React from 'react';
import CategoryEventsIndexItem from './category_events_index_item';

class CategoryEvents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getEventsByCategory(this.props.match.params.category)
    }

    render() {
        if (!this.props.category || Object.keys(this.props.events).length < 1) {
            return null;
        }
        return (
            <div>
                <div>
                    {this.props.category} events in San Francisco
                </div>

                <div>
                    {Object.keys(this.props.events).map(eventId => {
                        let event = this.props.events[eventId];
                        return (<CategoryEventsIndexItem event={event} />)
                    })}
                </div>
                
            </div>
        )
    }
}

export default CategoryEvents;