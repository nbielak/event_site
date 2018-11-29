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
            if (eventCategory.categoryId.toString() === categoryId) {
                result.push(eventCategory.eventId);
            }
        })
        return result;
    }

    sortEvents(categoryId) {
        let eventIds = this.getEventIds(categoryId);
        let result = [];
        eventIds.forEach(eventId => {
            this.props.events.forEach(event => {
                if (event.id === eventId) {
                    result.push(event);
                }
            })
        });
        return result
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

                <div className="browse-categories">
                    {Object.keys(this.props.categories).map(categoryId => {
                        let category = this.props.categories[categoryId].name
                        let events = this.sortEvents(categoryId);
                        return (<CategoryList key={categoryId} 
                            eventCategories={this.props.eventCategories} 
                            events={events} 
                            category={category}/>)
                    })}
                </div>
            </div>
        )
    }
}

export default BrowseEvents;