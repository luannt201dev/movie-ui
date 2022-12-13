export const path = {
    register: '/api/auth/signup',
    login: '/api/auth/signin',
    getLists: `/api/lists/`,
    createList: `/api/lists/`,
    deleteList: (id) => `/api/lists/${id}`,
    getMovies: `/api/movies/`,
    createMovie: `/api/movies/`,
    deleteMovie: (id) => `/api/movies/${id}`,
    getCategories: `/api/admin/categories/`,
    createCategory: `/api/admin/categories/`,
    deleteCategory: (id) => `/api/admin/categories/${id}`,
    updateCategory: (id) => `/api/admin/categories/${id}`,

}