import { Action } from "redux";

export interface setAuthorizeAction extends Action {
    authorized: boolean
}