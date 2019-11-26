import { Category, Search, Query, Poem } from "."

export interface MainStore {
    categories: Array<Category> | []
    query: Query
    search: Search
    data: Array<Poem>
}