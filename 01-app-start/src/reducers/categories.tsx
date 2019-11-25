import { ADD_CATEGORY_INFO } from "../actions/category"
import { Category, AddCategoryAction } from "../intefaces/category"
import { Action } from "redux"

const categories = (state: Array<Category> = [], action: Action) => {
    switch (action.type) {
      case ADD_CATEGORY_INFO: {
        let newState = [...state, Object.assign({}, (action as AddCategoryAction).category)]
        return newState
      }
      // case INC_CATEGORY_COUNT: {
      //   let newState: Array<Category> = [...state]
      //   newState.map(a => {
      //     if (a.id === (action as CategoriesIncAction).category) {
      //       a.count += 1
      //     }
      //     return a
      //   })
      //   return newState
      // }
      // case RES_CATEGORIES:
      //   return []
      default:
        return state
    }
  }

  export default categories