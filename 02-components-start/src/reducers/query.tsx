import {
    ADD_WHAT,
    REPLACE_WHAT,
    ADD_FROM,
    REPLACE_FROM,
    ADD_WHERE,
    REPLACE_WHERE,
    ADD_OFFSET,
    ADD_LIMIT,
    SQL_TYPES
} from "../actions/query"
import filters, { startingFiltersState } from "./filters"
import { Action } from "redux"
import { AddToQueryWhatAction, ReplaceQueryWhatAction, ReplaceQueryFromAction, AddToQueryFromAction, AddToQueryWhereAction, ReplaceWhereFromAction, AddToQueryOffsetAction, AddToQueryLimitAction } from "../actions/query"
import { Query } from "../intefaces"

const startingQuery: Query = {
    filters: startingFiltersState,
    type: SQL_TYPES.SELECT,
    what: [],
    from: [],
    where: [],
    order: [],
    sort: [],
    offset: 0,
    limit: 0
}

const query = (state = startingQuery, action: Action) => {
    switch (action.type) {
        case ADD_WHAT: {
            let newState = Object.assign({}, state, {
                what: [...state.what, (action as AddToQueryWhatAction).what]
            })
            return newState
        }
        case REPLACE_WHAT: {
            let newState = Object.assign({}, state, {
                what: [(action as ReplaceQueryWhatAction).what]
            })
            return newState
        }
        case ADD_FROM: {
            let newState = Object.assign({}, state, {
                from: [...state.from, (action as AddToQueryFromAction).from]
            })
            return newState
        }
        case REPLACE_FROM: {
            let newState = Object.assign({}, state, {
                from: [(action as ReplaceQueryFromAction).from]
            })
            return newState
        }
        case ADD_WHERE: {
            let newState = Object.assign({}, state, {
                where: [...state.where, (action as AddToQueryWhereAction).where]
            })
            return newState
        }
        case REPLACE_WHERE: {
            let newState = Object.assign({}, state, {
                where: [(action as ReplaceWhereFromAction).where]
            })
            return newState
        }
        case ADD_OFFSET: {
            let newState = Object.assign({}, state, {
                offset: (action as AddToQueryOffsetAction).offset
            })
            return newState
        }
        case ADD_LIMIT: {
            let newState = Object.assign({}, state, {
                limit: (action as AddToQueryLimitAction).limit
            })
            return newState
        }
        default:
            return Object.assign({}, state, {
                filters: filters(state.filters, action)
            })
    }
}

export default query