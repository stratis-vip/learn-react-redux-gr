import {Poem} from '../intefaces'
import {ADD_DATA, ADD_DATA_ARRAY, AddDataAction, AddDataArrayAction, CLEAR_DATA} from '../actions/data'
import {Action} from 'redux'

export const data = (state: Array<Poem> = [], action: Action) => {
    switch (action.type) {
        case ADD_DATA: {
            let newData = Object.assign({}, (action as AddDataAction).data)
            const exists = state.filter(a => a.id === newData.id)
            if (exists.length === 0) {
                return [...state, newData]
            } else {
                return [...state]
            }
        }
        case ADD_DATA_ARRAY: {
            let tempState = (action as AddDataArrayAction).replaceState ? [] : [...state]
            return [...tempState, ...(action as AddDataArrayAction).array]
        }
        case CLEAR_DATA:
            return []

        default:
            return state
    }
}


export default data