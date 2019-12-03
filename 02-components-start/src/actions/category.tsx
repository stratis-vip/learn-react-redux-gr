import {IaddCategoryAction, Icategory, IincCategoryAction} from "../intefaces"
import {Action} from "redux"

//προσθέτει μια κατηγορία στο store
// η κατηγορία ακολουθεί το Category
export const ADD_CATEGORY = 'ADD_CATEGORY'

// προσθέτει ένα στο cc της κατηγορίας categoryId
//αυτό γίνεται όταν θα προσθέτω ποίημα και πρέπει να αυξήσω τα στατιστικά
export const INC_CATEGORY_COUNT = 'INC_CATEGORY_COUNT'

// μηδενίζει τις κατηγορίες
export const RESET_CATEGORIES = 'RESET_CATEGORIES'

// προσθέτει την κατηγορία category
export const addCategory = (category: Icategory): IaddCategoryAction => ({
  type: ADD_CATEGORY,
  category
})

export const incCategory = (categoryId: number): IincCategoryAction => ({
  type: INC_CATEGORY_COUNT,
  categoryId
})

export const resetCategories = (): Action => ({
  type: RESET_CATEGORIES
})
