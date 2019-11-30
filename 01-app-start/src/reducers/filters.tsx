import {
  AddCategoryAction,
  AddOrderAction,
  AddSortAction,
  DEFINE_CAT,
  DEFINE_ORDER,
  DEFINE_RESET,
  DEFINE_SORT,
  ORDER,
  SORT
} from "../actions/filters"
import {Action} from 'redux'
import {Filters} from '../intefaces'

export const startingFiltersState: Filters = {
  cat: 0,
  order: ORDER.NO_ORDER,
  sort: SORT.NO_SORT
}

const filters = (state = startingFiltersState, action: Action): Filters => {
  switch (action.type) {
    case DEFINE_ORDER: {
      return Object.assign({}, state, {order: (action as AddOrderAction).order})
    }
    case DEFINE_SORT: {
      return Object.assign({}, state, {sort: (action as AddSortAction).sort})
    }
    case DEFINE_CAT: {
      return Object.assign({}, state, {cat: (action as AddCategoryAction).category})
    }
    case DEFINE_RESET: {
        return startingFiltersState
    }
    default:
      return state
  }
}

export default filters
