export const DEFINE_ORDER = "DEFINE_ORDER"
export const DEFINE_SORT = "DEFINE_SORT"
export const DEFINE_CAT = "DEFINE_CAT"
export const DEFINE_RESET = "DEFINE_RESET"

import {Action} from 'redux'

export enum ORDER {
    NO_ORDER = "NO_ORDER",
    BY_DATE = "BY_DATE",
    BY_NUM = "BY_NUM"
  }
  
  export enum SORT {
    NO_SORT = "NO_SORT",
    ASC = "ASC",
    DESC = "DESC"
  }
export interface AddOrderAction extends Action {
  order: string
}

export interface AddSortAction extends Action {
  sort: string
}

export interface AddCategoryAction extends Action {
  category: number
}

export const addOrder = (order:string):AddOrderAction => ({
    type: DEFINE_ORDER,
    order
})

export const addSort = (sort:string):AddSortAction => ({
    type: DEFINE_SORT,
    sort
})

export const addCat = (category:number):AddCategoryAction => ({
    type: DEFINE_CAT,
    category
})

export const resetFilters = ():Action =>({
    type: DEFINE_RESET
})