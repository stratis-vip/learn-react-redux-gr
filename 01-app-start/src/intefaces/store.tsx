import { Category } from "./category"

export interface MainStore {
    categories: Array<Category> | []
}