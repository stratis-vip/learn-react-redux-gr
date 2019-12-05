import {Action} from 'redux'

export const ADD_WHAT = 'ADD_WHAT'
export const REPLACE_WHAT = 'REPLACE_WHAT'
export const ADD_FROM = 'ADD_FROM'
export const REPLACE_FROM = 'REPLACE_FROM'
export const SET_WHERE = 'ADD_WHERE'
export const CLEAR_WHERE = 'CLEAR_WHERE'
export const REPLACE_WHERE = 'REPLACE_WHERE'
export const ADD_OFFSET = 'ADD_OFFSET'
export const ADD_LIMIT = 'ADD_LIMIT'

export enum SQL_TYPES {
    SELECT = 'SELECT'
}

export interface AddToQueryWhatAction extends Action {
    what: string
}

export interface ReplaceQueryWhatAction extends Action {
    what: string
}

export interface AddToQueryFromAction extends Action {
    from: string
}

export interface ReplaceQueryFromAction extends Action {
    from: string
}

export interface SetQueryWhereAction extends Action {
    where: string
}

export interface ReplaceWhereFromAction extends Action {
    where: string
}

export interface AddToQueryOffsetAction extends Action {
    offset: number
}

export interface AddToQueryLimitAction extends Action {
    limit: number
}

export const addToQueryWhat = (what: string): AddToQueryWhatAction => ({
    type: ADD_WHAT,
    what
})

export const replaceQueryWhat = (what: string): ReplaceQueryWhatAction => ({
    type: REPLACE_WHAT,
    what
})

export const addToQueryFrom = (from: string): AddToQueryFromAction => ({
    type: ADD_FROM,
    from
})

export const replaceQueryFrom = (from: string): ReplaceQueryFromAction => ({
    type: REPLACE_FROM,
    from
})

export const setQueryWhere = (where: string): SetQueryWhereAction => ({
    type: SET_WHERE,
    where
})

export const clearQueryWhere = (): Action => ({
    type: CLEAR_WHERE
})

export const replaceQueryWhere = (where: string): ReplaceWhereFromAction => ({
    type: REPLACE_WHERE,
    where
})

export const addToQueryOffset = (offset: number): AddToQueryOffsetAction => ({
    type: ADD_OFFSET,
    offset
})

export const addToQueryLimit = (limit: number): AddToQueryLimitAction => ({
    type: ADD_LIMIT,
    limit
})