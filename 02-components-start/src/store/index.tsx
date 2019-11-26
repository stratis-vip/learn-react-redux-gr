import { createStore } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import mData from '../data'


export const mockStore = createStore(mData, composeWithDevTools())
const store = createStore(rootReducer, composeWithDevTools(
    // other store enhancers if any
))

export default store