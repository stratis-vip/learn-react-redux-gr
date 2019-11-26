import { createStore } from "redux"
import rootReducer from "."
import { addSearchByText, addSearchByNumber } from "../actions/search"
import { Search } from "../intefaces"

let store = null
const initStore = () => createStore(rootReducer)
beforeEach(() => store = initStore())

describe("Search", () => {
    it('"byText"', () => {
      
      store.dispatch(addSearchByText('txt'))
      const search:Search = store.getState().search
      expect(search.text).toBe('txt')
      
      store.dispatch(addSearchByText('newtxt'))
      const newSearch:Search = store.getState().search
      expect(newSearch.text).toBe('newtxt')
    })

    it('"byNumber"', () => {
      
        store.dispatch(addSearchByNumber(-23))
        const search:Search = store.getState().search
        expect(search.number).toBe(-23)
        
        store.dispatch(addSearchByNumber(23495))
        const newSearch:Search = store.getState().search
        expect(newSearch.number).toBe(23495)
      })
  
    
  })