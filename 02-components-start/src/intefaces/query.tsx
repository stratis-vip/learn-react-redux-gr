import {Filters} from "./filters"

export interface Query {
  filters: Filters
  type: string
  what: Array<string>
  from: Array<string>
  where: Array<string>
  order: string
  sort: string
  offset: number
  limit: number
}