import {Action} from "redux";
import {MODE, SET_MODE, SetModeAction} from "../actions/mode";

const mode = (state: MODE = MODE.NORMAL, action: Action): MODE => {
  // if ((action as SetModeAction).mode !== state) {
  //   return (action as SetModeAction).mode
  // } else {
  //   return state
  // }
  switch (action.type) {
    case SET_MODE:
      return  (action as SetModeAction).mode
    default:
      return state
  }
}

export default mode