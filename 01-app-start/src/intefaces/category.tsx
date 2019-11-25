import {Action} from 'redux'

export interface Category{
	description: string
	cc: number
}

export interface AddCategoryAction extends Action{
    category: Category
}