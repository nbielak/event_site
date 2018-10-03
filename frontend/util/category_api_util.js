export const fetchAllCategories = () => (
    $.ajax({
        method: 'GET',
        url: '/api/categories'
    })
);
export const fetchAllCategories = categoryId => (
    $.ajax({
        method: 'GET',
        url: `/api/categories/${categoryId}`
    })
);