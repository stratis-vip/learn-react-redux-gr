import {Action} from 'redux'

export interface Category{
	id: number
	description: string
	cc: number
}

export interface AddCategoryAction extends Action{
    category: Category
}

export interface IncCategoryAction extends Action{
    categoryId: number
}


