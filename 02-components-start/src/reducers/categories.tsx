import {ADD_CATEGORY, INC_CATEGORY_COUNT, RESET_CATEGORIES} from "../actions/category"
import {IaddCategoryAction, Icategory, IincCategoryAction} from "../intefaces"
import {Action} from "redux"

const categories = (state: Array<Icategory> = [], action: Action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      return [...state, Object.assign({}, (action as IaddCategoryAction).category)]
    }
    case INC_CATEGORY_COUNT: {
      let newState: Array<Icategory> = [...state]
      newState.map(a => {
        if (a.id === (action as IincCategoryAction).categoryId) {
          a.cc += 1
        }
        return a
      })
      return newState
    }
    case RESET_CATEGORIES:
      return []
    default:
      return state
  }
}

  export default categories