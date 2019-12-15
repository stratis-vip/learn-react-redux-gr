import React from "react";

import { Credentials } from '../intefaces/api'
import { sendToCheck } from '../apiConnect'
import { bindActionCreators } from "redux";
import { setAuthorize } from '../actions/authorize'
import { connect } from 'react-redux'
import { MainStore } from "../intefaces";
import ButtonFactory from "../btnFactory";

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
  const handleClick = () => {
    sendToCheck(getValues())
      .then(value => {
        console.log(value)
        const { email } = (value as Resp).data
        if (email !== undefined) { props.setAuth(true) }
      })
      .catch(er => showError(er.message))
  }

  const showError = (error) => {
    const div = (document.querySelector('div[role="alert"]') as HTMLDivElement)
    div.hidden = false
    div.textContent = error
  }

  return (
    <div className="container-fluid">
      <div className="hidden-xs col-sm-4">-</div>
      <div className="col-xs-12 col-sm-4 light">
        <h3 className="text-center">{"title"}</h3>
        <div className="alert alert-danger" role="alert"
          hidden></div>
        {/* <form action="https://enubgkdcnpcci.x.pipedream.net" method="post"> */}
        <div>
          <div className="form-group">
            <label htmlFor="email">Όνομα μέλους</label>
            <input className="form-control" type="text" name="email" placeholder="Όνομα μέλους"
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
                <ButtonFactory className={'btn-primary'} title="Σύνδεση" url='/manage' func={handleClick} />
                {/* <input className="btn btn-primary"
                   type="submit"
                   value="Σύνδεση"
                   onClick={handleClick} /> */}
              </div>
            </div>
          </div>
          {/* </form> */}
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