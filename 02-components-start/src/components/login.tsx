import React from "react";

import { Credentials } from '../intefaces/api'
import { sendToCheck } from '../apiConnect'
import { bindActionCreators } from "redux";
import { setAuthorize } from '../actions/authorize'
import { connect } from 'react-redux'
import { MainStore } from "../intefaces";
import ButtonFactory, { ButtonIfFactory } from "../btnFactory";

interface Auth {
  email: string
  token: string
}
interface Resp {
  config: {}
  data: Auth
  headers: {}
  request: {}
  status: number
  statusText: string
}

const getValues = (): Credentials => {
  const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value
  const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value
  return { email, password }
}


const Login = (props: { authorized: boolean, setAuth: any }) => {
  const handleClick = (): Promise<boolean> => {
    return new Promise(async (resolve) => {
      const val = await sendToCheck(getValues())
      .catch(er => {
        showError(er.message)
        resolve(false)
      })
    console.log(val)
    const { email } = (val as Resp).data
    props.setAuth(email !== undefined)
    resolve(email !== undefined)
    })
  }

  const showError = (error) => {
    const div = (document.querySelector('div[role="alert"]') as HTMLDivElement)
    div.hidden = false
    div.textContent = error
  }

  return (
    <div  className="container col-lg-4 offset-lg-4">
        <h3 className="text-center">Σύνδεση Διαχειριστή</h3>
        <div className="alert alert-danger" role="alert"
          hidden></div>
        <div>
          <div className="form-group">
            <label htmlFor="email">Διεύθυνση email</label>
            <input className="form-control" type="text" name="email" placeholder="Διεύθυνση email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Κωδικός πρόσβασης</label>
            <input className="form-control"
              type="password" name="password"
              placeholder="Κωδικός πρόσβασης"
            />
          </div>
          <div className="form-group">
            <div className="form-group">
              <div className="text-center">
                <ButtonIfFactory className={'btn-primary'} title="Σύνδεση" url='/manage' func={handleClick} />
              </div>
            </div>
          </div>
        </div>

      </div>

  )
}

const mapStateToProps = (state: MainStore) => {
  return {
    authorized: state.authorized
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAuth: setAuthorize
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login)