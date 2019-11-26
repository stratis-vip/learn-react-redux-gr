import { ADD_SEARCH_BY_TEXT, ADD_SEARCH_BY_NUMBER, AddSearchByTextAction, AddSearchByNumberAction } from "../actions/search"
import { Action } from "redux"
import { Search} from '../intefaces'

const startingSearchState:Search = {
  text: null,
  number: null
}

const search = (state = startingSearchState, action:Action):Search => {
  switch (action.type) {
    case ADD_SEARCH_BY_TEXT: 
      return {text: (action as AddSearchByTextAction).text, number: null}
    case ADD_SEARCH_BY_NUMBER:
      return {text: null, number: (action as AddSearchByNumberAction).num}
    default:
      return state
  }
}

export default search
