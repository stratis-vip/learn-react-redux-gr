import {Action} from "redux";
import {
  SET_CURRENT_PAGE,
  SET_PAGINATION,
  SET_RESULT_PER_PAGE,
  SET_TOTAL_PAGES,
  SET_TOTAL_RESULTS,
  SetFullPaginationAction,
  SetPaginationAction
} from "../actions/pagination";
import {Pagination} from "../intefaces";

const starting: Pagination = {
  page: 1,
  totalPages: 0,
  resultsPerPage: 0,
  results: 0
}

export const pagination = (state: Pagination = starting, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return Object.assign({}, state, {page: (action as SetPaginationAction).value});
    }
    case SET_TOTAL_PAGES: {
      return Object.assign({}, state, {totalPages: (action as SetPaginationAction).value});
    }
    case SET_TOTAL_RESULTS:
      return Object.assign({}, state, {results: (action as SetPaginationAction).value});
    case SET_RESULT_PER_PAGE:
      return Object.assign({}, state, {resultsPerPage: (action as SetPaginationAction).value});
    case SET_PAGINATION:
      return (action as SetFullPaginationAction).value
    default:
      return state;
  }
};

export default pagination;
