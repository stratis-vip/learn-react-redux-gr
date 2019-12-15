import {Search} from '../intefaces'
import {setRouteAction} from "../intefaces/route";
import {SET_ROUTE} from "../actions/route";

const startingSearchState: Search = {
  text: null,
  number: null
}

const search = (state = '/home', action: setRouteAction): string => {
  switch (action.type) {
    case SET_ROUTE:
      return  action.page
    default:
      return state
  }
}

export default search
