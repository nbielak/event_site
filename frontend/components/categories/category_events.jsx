import React from 'react';
import CategoryEventsIndexItem from './category_events_index_item';

class CategoryEvents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.getEventsByCategory(this.props.match.params.category)
    }

    render() {
        if (!this.props.category || Object.keys(this.props.events).length < 1) {
            return null;
        }
        return (
            <div className="category-events">
                <div className="category-events-header">
                    <h1>{this.props.category} events</h1>
                    <h1>in <label>San Francisco</label></h1>
                </div>

                <div className="category-events-list">
                    {Object.keys(this.props.events).map(eventId => {
                        let event = this.props.events[eventId];
                        return (<CategoryEventsIndexItem key={event.id} event={event} />)
                    })}
                </div>
                
            </div>
        )
    }
}

export default CategoryEvents;