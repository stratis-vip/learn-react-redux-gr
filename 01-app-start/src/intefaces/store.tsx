import { Category, Search, Query, Poem, Pagination } from "."

export interface MainStore {
    categories: Array<Category> | []
    query: Query
    search: Search
    data: Array<Poem>
    pagination: Pagination
}