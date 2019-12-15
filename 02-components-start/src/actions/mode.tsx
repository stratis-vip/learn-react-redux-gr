import {Action} from "redux";
export const SET_MODE = 'SET_MODE'

export enum MODE {
  NORMAL,
  SEND,
  FETCH
}

export interface SetModeAction extends Action {
  mode: MODE
}

export const setMode = (mode:MODE):SetModeAction  => ({
  type:SET_MODE,
  mode
})