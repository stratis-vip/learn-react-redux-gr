import {createStore} from "redux"
import rootReducer from "."
import {addCat, addOrder, addSort, ORDER, resetFilters, SORT} from "../actions/filters"
import {startingFiltersState} from "./filters"
import {
  addToQueryFrom,
  addToQueryLimit,
  addToQueryOffset,
  addToQueryWhat,
  replaceQueryFrom,
  replaceQueryWhat,
  replaceQueryWhere,
  setQueryWhere
} from "../actions/query"

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
  
    it('"Add to What"', () => {
      store.dispatch(addToQueryWhat('id'))
      store.dispatch(addSort(SORT.DESC))
      store.dispatch(addOrder(ORDER.BY_DATE))
      const query = store.getState().query
      expect(query.filters.cat).toBe(0)
      expect(query.filters.order).toBe(ORDER.BY_DATE)
      expect(query.filters.sort).toBe(SORT.DESC)
      expect(query.what).toStrictEqual(['id'])
    })
  
    it('"Replace What"', () => {
      store.dispatch(addToQueryWhat('id'))
      store.dispatch(addToQueryWhat('category'))
      const query = store.getState().query
      expect(query.what).toStrictEqual(['id', 'category'])
  
      store.dispatch(replaceQueryWhat('alfa, bita, gama'))
      const newQuery = store.getState().query
  
      expect(newQuery.what).toStrictEqual(['alfa, bita, gama'])
    })
  
    it('"Add to From"', () => {
      store.dispatch(addToQueryFrom('keimena'))
      const query = store.getState().query
      expect(query.from).toStrictEqual(['keimena'])
    })
  
    it('"Replace From"', () => {
      store.dispatch(addToQueryFrom('keimena'))
      const query = store.getState().query
      expect(query.from).toStrictEqual(['keimena'])
  
      store.dispatch(replaceQueryFrom('categories'))
      const newQuery = store.getState().query
  
      expect(newQuery.from).toStrictEqual(['categories'])
    })
  
    it('"Add to Where"', () => {
      store.dispatch(setQueryWhere('id = 5'))
      const query = store.getState().query
      expect(query.where).toStrictEqual(['id = 5'])
    })
  
    it('"Replace Where"', () => {
      store.dispatch(setQueryWhere('id = 5'))
      const query = store.getState().query
      expect(query.where).toStrictEqual(['id = 5'])
  
      store.dispatch(replaceQueryWhere('id = 8'))
      const newQuery = store.getState().query
  
      expect(newQuery.where).toStrictEqual(['id = 8'])
    })
  
    it('"Add to OFFSET"', () => { 
      store.dispatch(addToQueryOffset(13))
      const query = store.getState().query
      expect(query.offset).toStrictEqual(13)
    })
  
    it('"Add to LIMIT"', () => {
      store.dispatch(addToQueryLimit(13))
      const query = store.getState().query
      expect(query.limit).toStrictEqual(13)
    })
  })