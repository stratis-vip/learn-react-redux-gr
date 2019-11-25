// ./src/reducers/index.tsx

import {combineReducers} from 'redux'
import categories from './categories'
import query from './query'
// import pagination from './pagination'
// import search from './search'
// import dataRes from './data'


const rootReducer = combineReducers(
    {categories, query}//, pagination, search, dataRes}
)

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>