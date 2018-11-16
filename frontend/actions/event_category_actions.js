import * as EventCategoryApiUtil from '../util/event_category_api_util';

export const RECEIVE_ALL_EVENT_CATEGORIES = "RECEIVE_ALL_EVENT_CATEGORIES"
export const RECEIVE_EVENT_CATEGORY = "RECEIVE_EVENT_CATEGORY";
export const RECEIVE_EVENT_CATEGORY_ERRORS = "RECEIVE_EVENT_CATEGORY_ERRORS";

const receiveAllEventCategories = eventCategories => ({
    type: RECEIVE_ALL_EVENT_CATEGORIES,
    eventCategories
})
const receiveEventCategory = eventCategory => ({
    type: RECEIVE_EVENT_CATEGORY,
    eventCategory
});

const receiveEventCategoryErrors = errors => ({
    type: RECEIVE_EVENT_CATEGORY_ERRORS,
    errors
});

export const fetchAllEventCategories = () => dispatch => (
    EventCategoryApiUtil.fetchAllEventCategories().then(
        eventCategories => dispatch(receiveAllEventCategories(eventCategories))
    )
)

export const fetchEventCategory = eventId => dispatch => (
    EventCategoryApiUtil.fetchEventCategory(eventId).then(
        eventCategory => dispatch(receiveEventCategory(eventCategory)),
        errors => dispatch(receiveEventCategoryErrors(errors.responseJSON))
    )
);

export const createEventCategory = eventCategory => dispatch => (
    EventCategoryApiUtil.createEventCategory(eventCategory).then(
        eventCategory => dispatch(receiveEventCategory(eventCategory)),
        errors => dispatch(receiveEventCategoryErrors(errors.responseJSON))
    )
);

export const updateEventCategory = eventCategory => dispatch => (
    EventCategoryApiUtil.updateEventCategory(eventCategory).then(
        eventCategory => dispatch(receiveEventCategory(eventCategory)),
        errors => dispatch(receiveEventCategoryErrors(errors.responseJSON))
    )
);