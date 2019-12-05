import {Action} from 'redux'

//
export interface Icategory {
  id: number
  description: string
  cc: number
}

export interface IaddCategoryAction extends Action {
  category: Icategory
}

export interface IincCategoryAction extends Action {
  categoryId: number
}

export interface IaddAllCategories extends Action {
  categories: Icategory[]
}


