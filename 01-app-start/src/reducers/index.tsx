// ./src/reducers/index.tsx

import {combineReducers, Reducer} from 'redux'
import categories from './categories'
import query from './query'
import { MainStore } from '../intefaces'
// import pagination from './pagination'
import search from './search'
// import dataRes from './data'


const rootReducer:Reducer<MainStore> = combineReducers(
    {categories, query, search}//, pagination, search, dataRes}
)

export default rootReducer

//export type AppState = ReturnType<typeof rootReducer>