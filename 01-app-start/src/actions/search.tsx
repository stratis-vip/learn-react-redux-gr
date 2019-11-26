import { Action } from "redux"

export const ADD_SEARCH_BY_TEXT = 'ADD_SEARCH_BY_TEXT'
export const ADD_SEARCH_BY_NUMBER = 'ADD_SEARCH_BY_NUMBER'

export interface AddSearchByTextAction extends Action {
    text: string
}

export interface AddSearchByNumberAction extends Action {
    num: number
}

export const addSearchByText = (text: string): AddSearchByTextAction => ({
    type: ADD_SEARCH_BY_TEXT,
    text
})

export const addSearchByNumber = (num: number): AddSearchByNumberAction => ({
    type: ADD_SEARCH_BY_NUMBER,
    num
})