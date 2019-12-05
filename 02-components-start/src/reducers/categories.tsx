import {ADD_ALL_CATEGORIES, ADD_CATEGORY, INC_CATEGORY_COUNT, RESET_CATEGORIES} from "../actions/category"
import {IaddCategoryAction, Icategory, IincCategoryAction} from "../intefaces"
import {Action} from "redux"
import {IaddAllCategories} from "../intefaces/Icategory";

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
    case ADD_ALL_CATEGORIES:
      let alfa = (action as IaddAllCategories).categories
      alfa.unshift({id: 0, cc: 0, description: ''})
      console.log('ALFA =', alfa)
      return alfa

    default:
      return state
  }
}

  export default categories