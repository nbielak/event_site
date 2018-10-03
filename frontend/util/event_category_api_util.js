export const fetchEventCategory = eventCategoryId => (
    $.ajax({
        method: 'GET',
        url: `/api/event_categories/${eventCategoryId}`
    })
);

export const createEventCategory = eventCategory => (
    $.ajax({
        method: 'POST',
        url: '/api/event_categories',
        data: { eventCategory }
    })
);

export const updateEventCategory = eventCategory => (
    $.ajax({
        method: 'PATCH',
        url: `/api/event_categories/${eventCategory.id}`,
        data: { eventCategory }
    })
);