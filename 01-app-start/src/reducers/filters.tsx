import { DEFINE_CAT, DEFINE_ORDER, DEFINE_SORT, DEFINE_RESET, AddOrderAction, AddSortAction, AddCategoryAction, ORDER, SORT} from "../actions/filters"
import { Action } from "redux"
import {Filters} from '../intefaces'

export const startingFiltersState:Filters = {
  cat: 0,
  order: ORDER.NO_ORDER,
  sort: SORT.NO_SORT
}

const filters = (state = startingFiltersState, action:Action):Filters => {
  switch (action.type) {
    case DEFINE_ORDER: {
      let newState = Object.assign({}, state, {order: (action as AddOrderAction).order})
      return newState
    }
    case DEFINE_SORT: {
        let newState = Object.assign({}, state, {sort: (action as AddSortAction).sort})
        return newState
    }
    case DEFINE_CAT: {
        let newState = Object.assign({},state,  {cat: (action as AddCategoryAction).category})
        return newState
    }
    case DEFINE_RESET: {
        return startingFiltersState
    }
    default:
      return state
  }
}

export default filters
