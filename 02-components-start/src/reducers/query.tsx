import {
  ADD_FROM,
  ADD_LIMIT,
  ADD_OFFSET,
  ADD_WHAT,
  ADD_WHERE,
  AddToQueryFromAction,
  AddToQueryLimitAction,
  AddToQueryOffsetAction,
  AddToQueryWhatAction,
  AddToQueryWhereAction,
  REPLACE_FROM,
  REPLACE_WHAT,
  REPLACE_WHERE,
  ReplaceQueryFromAction,
  ReplaceQueryWhatAction,
  ReplaceWhereFromAction,
  SQL_TYPES
} from "../actions/query"
import filters, {startingFiltersState} from "./filters"
import {Action} from "redux"
import {Query} from "../intefaces"
import {ORDER, SORT} from "../actions/filters";

const startingQuery: Query = {
  filters: startingFiltersState,
  type: SQL_TYPES.SELECT,
  what: [],
  from: [],
  where: [],
  order: ORDER.NO_ORDER,
  sort: SORT.NO_SORT,
  offset: 0,
  limit: 0
}

const query = (state = startingQuery, action: Action) => {
  switch (action.type) {
    case ADD_WHAT:
      return Object.assign({}, state, {
        what: [...state.what, (action as AddToQueryWhatAction).what]
      })
    case REPLACE_WHAT:
      return Object.assign({}, state, {
        what: [(action as ReplaceQueryWhatAction).what]
      })
    case ADD_FROM: {
      return Object.assign({}, state, {
        from: [...state.from, (action as AddToQueryFromAction).from]
      })
    }
    case REPLACE_FROM:
      return Object.assign({}, state, {
        from: [(action as ReplaceQueryFromAction).from]
      })
    case ADD_WHERE:
      return Object.assign({}, state, {
        where: [...state.where, (action as AddToQueryWhereAction).where]
      })
    case REPLACE_WHERE:
      return Object.assign({}, state, {
        where: [(action as ReplaceWhereFromAction).where]
      })
    case
    ADD_OFFSET:
      return Object.assign({}, state, {
        offset: (action as AddToQueryOffsetAction).offset
      })
    case
    ADD_LIMIT:
      return Object.assign({}, state, {
        limit: (action as AddToQueryLimitAction).limit
      })
    default:
      return Object.assign({}, state, {
        filters: filters(state.filters, action)
      })
  }
}

export default query