import { Category } from "."
import { Query } from ".";

export interface MainStore {
    categories: Array<Category> | []
    query: Query
}