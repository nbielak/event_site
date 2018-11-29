import React from 'react';
import EventIndexItem from './event_index_item';

const CategoryList = ({events, category, eventCategories}) => {
    return (
        <div>
            <div>
                <h2>
                    {category}
                </h2>
            </div>

            <div>
                See More
            </div>
            
            <ul>
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