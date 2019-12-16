import {IaddCategoryAction, Icategory, IincCategoryAction} from "../intefaces"
import {Action} from "redux"
import {IaddAllCategories} from "../intefaces/Icategory";

//προσθέτει μια κατηγορία στο store
// η κατηγορία ακολουθεί το Category
export const ADD_CATEGORY = 'ADD_CATEGORY'

/***
 * προσθέτει ένα στο cc της κατηγορίας categoryId
 * αυτό γίνεται όταν θα προσθέτω ποίημα και πρέπει να αυξήσω τα στατιστικά
 */
export const INC_CATEGORY_COUNT = 'INC_CATEGORY_COUNT'

/***
 * Προσθέτει όλες τις κατηγορίες
 */
export const ADD_ALL_CATEGORIES = 'ADD_ALL_CATEGORIES'

/***
 * μηδενίζει τις κατηγορίες
 */
export const RESET_CATEGORIES = 'RESET_CATEGORIES'

/***
 *  προσθέτει την κατηγορία category
 * @param category
 */
export const addCategory = (category: Icategory): IaddCategoryAction => ({
  type: ADD_CATEGORY,
  category
})

/***
 * Προσθέτει 1 στη ποσότητα ποιημάτων της κατηγορίας categoryId
 * @param categoryId
 */
export const incCategory = (categoryId: number, newMax?: number): IincCategoryAction => ({
  type: INC_CATEGORY_COUNT,
  categoryId,
  newMax
})

/***
 * Μηδενίζει τις κατηγορίες
 */
export const resetCategories = (): Action => ({
  type: RESET_CATEGORIES
})

export const addAllCategories = (categories: Icategory[]): IaddAllCategories => ({
  type: ADD_ALL_CATEGORIES,
  categories
})