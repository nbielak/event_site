import * as CategoryApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";

const receiveAllCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
});

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});

export const fetchAllCategories = () => dispatch => (
    CategoryApiUtil.fetchAllCategories().then(
        categories => dispatch(receiveAllCategories(categories))
    )
)

export const fetchCategory = categoryId => dispatch => (
    CategoryApiUtil.fetchCategory(categoryId).then(
        category => dispatch(receiveCategory(category))
    )
);