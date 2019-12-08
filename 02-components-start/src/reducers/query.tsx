import {
  ADD_FROM,
  ADD_LIMIT,
  ADD_OFFSET,
  ADD_WHAT,
  AddToQueryFromAction,
  AddToQueryLimitAction,
  AddToQueryOffsetAction,
  AddToQueryWhatAction,
  CLEAR_WHERE,
  REPLACE_FROM,
  REPLACE_WHAT,
  REPLACE_WHERE,
  ReplaceQueryFromAction,
  ReplaceQueryWhatAction,
  ReplaceWhereFromAction,
  RESET_QUERY,
  SET_WHERE,
  SetQueryWhereAction,
  SQL_TYPES
} from "../actions/query"
import filters, {startingFiltersState} from "./filters"
import {Action} from "redux"
import {Query} from "../intefaces"

const startingQuery: Query = {
  filters: startingFiltersState,
  type: SQL_TYPES.SELECT,
  what: [],
  from: [],
  where: [],
  offset: 0,
  limit: 10
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
    case SET_WHERE:
      return Object.assign({}, state, {
        where: [(action as SetQueryWhereAction).where]
      })
    case CLEAR_WHERE:
      return Object.assign({}, state, {
        where: []
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
    case RESET_QUERY:
      return startingQuery
    default:
      return Object.assign({}, state, {
        filters: filters(state.filters, action)
      })
  }
}

export default query