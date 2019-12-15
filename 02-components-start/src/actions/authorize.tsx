import { setAuthorizeAction } from "../intefaces/authorize"

export const SET_AUTHORIZE = 'SET_AUTHORIZE'

export const setAuthorize = (authorized:boolean):setAuthorizeAction => {
    return {
        type:SET_AUTHORIZE,
        authorized
    }
}