import {Icategory, Pagination, Poem, Query, Search} from "."
import {MODE} from "../actions/mode";

export interface MainStore {
  categories: Array<Icategory> | []
  query: Query
  search: Search
  data: Array<Poem>
  pagination: Pagination
  mode: MODE
  route:string
  authorized: boolean
}