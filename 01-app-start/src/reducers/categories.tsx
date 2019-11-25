import { ADD_CATEGORY, INC_CATEGORY_COUNT, RESET_CATEGORIES } from "../actions/category"
import { Category, AddCategoryAction, IncCategoryAction } from "../intefaces/category"
import { Action } from "redux"

const categories = (state: Array<Category> = [], action: Action) => {
    switch (action.type) {
      case ADD_CATEGORY: {
        let newState = [...state, Object.assign({}, (action as AddCategoryAction).category)]
        return newState
      }
      case INC_CATEGORY_COUNT: {
        let newState: Array<Category> = [...state]
        newState.map(a => {
          if (a.id === (action as IncCategoryAction).categoryId) {
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