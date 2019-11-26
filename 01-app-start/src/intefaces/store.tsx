import { Category, Search, Query } from "."

export interface MainStore {
    categories: Array<Category> | []
    query: Query
    search: Search
}