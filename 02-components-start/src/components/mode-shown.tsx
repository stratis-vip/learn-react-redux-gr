import React from "react"
import {MainStore} from "../intefaces";
import {connect} from 'react-redux'
import {MODE, setMode, SetModeAction} from "../actions/mode";
import {bindActionCreators} from "redux";

const toggleMode = (mode: MODE, set) => {
  let localMode = mode
  if (localMode === MODE.FETCH) {
    localMode = 0
  } else (localMode += 1)
  set(localMode)
  disable(localMode)
}

const disable = (mode: MODE): void => {
  switch (mode) {
    default:
      (document.querySelector('.overlay') as HTMLElement).hidden = false;
      // document.querySelectorAll('button').forEach(but => but.disabled = true);
      // document.querySelectorAll('input[type="radio"]').forEach(r => (r as HTMLInputElement).disabled = true);
      // (document.querySelector('ul.pagination') as HTMLElement).hidden = true;
      break
    case MODE.NORMAL:
      (document.querySelector('.overlay') as HTMLElement).hidden = true;
    // document.querySelectorAll('button').forEach(but => but.disabled = false);
    // document.querySelectorAll('input[type="radio"]').forEach(r => (r as HTMLInputElement).disabled = false);
    // (document.querySelector('ul.pagination') as HTMLElement).hidden = false;
  }
}
const ModeShow: React.FC<{ currentMode: MODE, set: SetModeAction }> = (props: { currentMode: MODE, set: SetModeAction }): JSX.Element => {
  return (
    <div className="overlay" hidden={props.currentMode === MODE.NORMAL ? true : false}>
      <h2 className="centered"><img src="/imgs/load.gif"/>Φόρτωση Δεδομένων</h2>
    </div>
  )
}

const mapStateToProps = (state: MainStore) => {
  return {
    currentMode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({set: setMode}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeShow)