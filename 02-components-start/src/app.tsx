/* ./src/app.tsx */
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import {getStatistics, refreshDataFromServer} from "./apiConnect";
import App from './components/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../Public/style.css'


store.subscribe(() => console.log(store.getState()))

getStatistics()
refreshDataFromServer()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)