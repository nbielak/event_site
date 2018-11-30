import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';


const CategoryList = ({events, category, eventCategories}) => {
    return (
        <div className="category-list">
            <div className="category-list-header-wrapper">
                
                <h1 className="category-list-title">
                    {category}
                </h1>
                
                <div>
                    <Link className="see-more" to={`/${category}/events`}>See More</Link>
                </div>
            </div>
            
            
            <ul className="event-list">
                {events.slice(0, 3).map(event => {
                    return (
                        <EventIndexItem key={event.id} 
                        eventCategories={eventCategories} 
                        event={event} 
                        categories={{ [category.id]: category }} />    
                    );
                })}
            </ul>
            
        </div>
    )
};

export default CategoryList;