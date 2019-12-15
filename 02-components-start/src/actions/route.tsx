import {setRouteAction} from "../intefaces/route";

export const SET_ROUTE = 'SET_ROUTE'

export const setRoute = (page:string):setRouteAction => ({
    type:SET_ROUTE,
    page
  })


