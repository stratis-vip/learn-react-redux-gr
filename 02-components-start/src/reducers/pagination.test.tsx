import { createStore } from "redux"
import rootReducer from "."

import { Poem } from "../intefaces"
import { setPage, setTotalPages, setResultsPerPage, setTotalResultsNumber } from "../actions/pagination"

let store = null
const alfa: Poem = {
    category: 1,
    id: 23,
    imnia_auth: '2013-12-11',
    keimeno: 'κειμενο',
    keimeno_id: 214
}
const bita: Poem = {
    category: 2,
    id: 35,
    imnia_auth: '2016-02-16',
    keimeno: 'κειμενο δυο',
    keimeno_id: 45
}
const ar = [alfa, bita]

const initStore = () => createStore(rootReducer)
beforeEach(() => store = initStore())

describe("Pagination", () => {
    it('"Set Page"', () => {
      let store = initStore();
      store.dispatch(setPage(5));
      const pagination = store.getState().pagination
      expect(pagination.page).toBe(5);
  
      store.dispatch(setPage(34));
      const newPagination = store.getState().pagination
      expect(newPagination.page).toBe(34);
    });
  
    it('"Set Total Pages"', () => {
      let store = initStore();
      store.dispatch(setTotalPages(54));
      const pagination = store.getState().pagination
      expect(pagination.totalPages).toBe(54);
  
      store.dispatch(setTotalPages(134));
      const newPagination = store.getState().pagination
      expect(newPagination.totalPages).toBe(134);
    });
  
    it('"Set Results Per Page"', () => {
      let store = initStore();
      store.dispatch(setResultsPerPage(5));
      const pagination = store.getState().pagination
      expect(pagination.resultsPerPage).toBe(5);
  
      store.dispatch(setResultsPerPage(14));
      const newPagination = store.getState().pagination
      expect(newPagination.resultsPerPage).toBe(14);
    });
  
    it('"Set Total Results"', () => {
      let store = initStore();
      store.dispatch(setTotalResultsNumber(523));
      const pagination = store.getState().pagination
      expect(pagination.results).toBe(523);
  
      store.dispatch(setTotalResultsNumber(1422));
      const newPagination = store.getState().pagination
      expect(newPagination.results).toBe(1422);
    });
  })