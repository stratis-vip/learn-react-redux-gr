import { SET_AUTHORIZE } from '../actions/authorize';
import { setAuthorizeAction } from "../intefaces/authorize";


const authorized = (state = false , action: setAuthorizeAction): boolean => {
  switch (action.type) {
    case SET_AUTHORIZE:
      return  action.authorized
    default:
      return state
  }
}

export default authorized