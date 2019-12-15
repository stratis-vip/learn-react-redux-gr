// ./src/reducers/index.tsx

import {combineReducers, Reducer} from 'redux'
import categories from './categories'
import query from './query'
import { MainStore } from '../intefaces'
import pagination from './pagination'
import search from './search'
import data from './data'
import mode from "./mode"
import route from './route'
import authorized from './authorized'

const rootReducer:Reducer<MainStore> = combineReducers(
    {categories, query, search, data, pagination, mode, route, authorized }//, dataRes}
)

export default rootReducer
