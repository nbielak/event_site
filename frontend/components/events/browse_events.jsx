import React from 'react';
import CategoryList from './category_list';

class BrowseEvents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchAllEvents()
            .then(action => this.props.fetchAllEventCategories())
            .then(action => this.props.fetchAllCategories())
    }

    loaded() {
        if (!this.props || 
            Object.keys(this.props.events).length < 1 || 
            Object.keys(this.props.eventCategories).length < 1 || 
            Object.keys(this.props.categories).length < 1) {
                return false
        } else {
            return true;
        }
    }

    getEventIds(categoryId) {
        let result = [];
        Object.keys(this.props.eventCategories).forEach(eventCategoryId => {
            let eventCategory = this.props.eventCategories[eventCategoryId];
            if (eventCategory.categoryId === categoryId) {
                result.push(eventCategory.eventId);
            }
        })
        return result;
    }

    sortEvents(categoryId) {
        let eventIds = this.getEventIds(categoryId);
        return (eventIds.map(eventId => {
            this.props.events.filter(event => event.id === eventId)
        }));
    }

    render() {
        if (!this.loaded()) {
            return null;
        }
        return(
            <div>
                <div>
                    Events In San Francisco
                </div>

                <div>
                    {Object.keys(this.props.categories).map(categoryId => {
                        let category = this.props.categories[categoryId].name
                        let events = this.sortEvents(categoryId);
                        return (<CategoryList key={categoryId} events={events} category={category}/>)
                    })}
                </div>
            </div>
        )
    }
}

export default BrowseEvents;