/* ./src/app.tsx */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import '../Public/style.css'
import {getStatistics, refreshDataFromServer} from "./apiConnect";


store.subscribe(() => console.log(store.getState()))

refreshDataFromServer()
getStatistics()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
)