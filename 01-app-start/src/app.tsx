/* ./src/app.tsx */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'

let currentState = JSON.stringify(store.getState())
ReactDOM.render(
	<App text={currentState} />, document.getElementById('root') //Component "App" στο div με id "root"
)