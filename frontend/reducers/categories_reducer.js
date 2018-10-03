import { RECEIVE_CATEGORY } from '../actions/category_actions';
import merge from 'lodash/merge';

const CategoriesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CATEGORY:
            let newState = {[action.category.id]: action.category};
            return merge({}, state, newState);
        default:
            return state;
    }
}

export default CategoriesReducer;