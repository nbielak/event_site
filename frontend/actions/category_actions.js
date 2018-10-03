import * as CategoryApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});

export const fetchCategory = category => dispatch => (
    CategoryApiUtil.fetchCategory(category).then(
        category => dispatch(receiveCategory(category))
    )
);