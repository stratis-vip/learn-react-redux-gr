export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
export const SET_RESULT_PER_PAGE = 'SET_RESULT_PER_PAGE'
export const SET_TOTAL_RESULTS = 'SET_TOTAL_RESULTS'

import { Action } from 'redux';

export interface SetPaginationAction extends Action {
    value: number
}

export const setPage = (curPage: number): SetPaginationAction => ({
    type: SET_CURRENT_PAGE,
    value: curPage
})

export const setTotalPages = (totalPages: number): SetPaginationAction => ({
    type: SET_TOTAL_PAGES,
    value: totalPages
})

export const setResultsPerPage = (resultsPerPage: number): SetPaginationAction => ({
    type: SET_RESULT_PER_PAGE,
    value: resultsPerPage
})

export const setTotalResultsNumber = (totalResultsNumber: number): SetPaginationAction => ({
    type: SET_TOTAL_RESULTS,
    value: totalResultsNumber
})
