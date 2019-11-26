import { createStore } from "redux"
import rootReducer from "."
import { addOrder, ORDER, SORT, addSort, addCat, resetFilters } from "../actions/filters"
import { startingFiltersState } from "./filters"

let store = null
const initStore = () => createStore(rootReducer)
beforeEach(() => store = initStore())

describe("Filters", () => {
    it('"Order by"', () => {
      
      store.dispatch(addOrder(ORDER.BY_DATE))
      const filters = store.getState().query.filters
      expect(filters.cat).toBe(0)
      expect(filters.order).toBe(ORDER.BY_DATE)
      expect(filters.sort).toBe(SORT.NO_SORT)
  
      store.dispatch(addOrder(ORDER.BY_NUM))
      const newFilters = store.getState().query.filters
      expect(newFilters.cat).toBe(0)
      expect(newFilters.order).toBe(ORDER.BY_NUM)
      expect(newFilters.sort).toBe(SORT.NO_SORT)
    })
  
    it('"Sort by"', () => {
      
      store.dispatch(addSort(SORT.ASC))
      const filters = store.getState().query.filters
      expect(filters.cat).toBe(0)
      expect(filters.order).toBe(ORDER.NO_ORDER)
      expect(filters.sort).toBe(SORT.ASC)
  
      store.dispatch(addSort(SORT.DESC))
      const newFilters = store.getState().query.filters
      expect(newFilters.cat).toBe(0)
      expect(newFilters.order).toBe(ORDER.NO_ORDER)
      expect(newFilters.sort).toBe(SORT.DESC)
    })
  
    it('"Add categories to filter" ', () => {
      store.dispatch(addCat(3))
      store.dispatch(addSort(SORT.DESC))
      const filters = store.getState().query.filters
      expect(filters.cat).toBe(3)
      expect(filters.order).toBe(ORDER.NO_ORDER)
      expect(filters.sort).toBe(SORT.DESC)
    })
  
    it('"Reset filters"', () => {
      store.dispatch(addCat(3))
      store.dispatch(addSort(SORT.DESC))
      store.dispatch(addOrder(ORDER.BY_DATE))
      const filters = store.getState().query.filters
      expect(filters.cat).toBe(3)
      expect(filters.order).toBe(ORDER.BY_DATE)
      expect(filters.sort).toBe(SORT.DESC)
      store.dispatch(resetFilters())
      const newFilter = store.getState().query.filters
      expect(newFilter).toStrictEqual(startingFiltersState)
    })
  })