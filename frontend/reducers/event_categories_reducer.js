import { RECEIVE_ALL_EVENT_CATEGORIES,
        RECEIVE_EVENT_CATEGORY } from '../actions/event_category_actions';

import merge from 'lodash/merge';

const EventCategoriesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_EVENT_CATEGORIES:
            return action.eventCategories;
        case RECEIVE_EVENT_CATEGORY:
            let newState = {[action.eventCategory.id]: action.eventCategory};
            return merge({}, state, newState);
        default:
            return state;
    }
}

export default EventCategoriesReducer;