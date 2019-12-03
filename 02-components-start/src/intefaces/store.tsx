import {Icategory, Pagination, Poem, Query, Search} from "."

export interface MainStore {
  categories: Array<Icategory> | []
  query: Query
  search: Search
  data: Array<Poem>
  pagination: Pagination
}