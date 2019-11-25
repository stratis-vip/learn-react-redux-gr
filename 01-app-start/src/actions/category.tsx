import { Category, AddCategoryAction } from "../intefaces"

export const ADD_CATEGORY_INFO= 'ADD_CATEGORY_INFO'

export const addCategory = (category:Category):AddCategoryAction => ({
    type: ADD_CATEGORY_INFO,
    category
})