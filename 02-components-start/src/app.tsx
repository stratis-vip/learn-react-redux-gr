/* ./src/app.tsx */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store, {mockStore} from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
	<Provider store={mockStore}>
		<App />
	</Provider>
	, document.getElementById('root') //Component "App" στο div με id "root"
)