import { Action } from "redux"
import { Poem } from "../intefaces"

export const ADD_DATA = 'ADD_DATA'
export const ADD_DATA_ARRAY = 'ADD_DATA_ARRAY'
export const CLEAR_DATA = 'CLEAR_DATA'

export interface AddDataAction extends Action {
    data: Poem
}

export interface AddDataArrayAction extends Action {
    array: Poem []
    replaceState: boolean
}

export const addData = (data: Poem):AddDataAction => ({
    type: ADD_DATA,
    data
})

export const clearData = ():Action => ({
    type: CLEAR_DATA,
})

export const addDataArray = (array:Poem[], replaceState:boolean = true):AddDataArrayAction => ({
    type:ADD_DATA_ARRAY,
    array,
    replaceState
})