/* ./src/app.tsx */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import '../Public/style.css'
import {addCategory, incCategory} from './actions/category'
import {Category} from './intefaces'


let curCatId = 0

const createCategory = (): Category => {
  curCatId += 1
  return {
    id: curCatId,
    description: `test Category ${curCatId}`,
    cc: Math.ceil(Math.random() * 300)
  }
}

store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App/>
      <div className="test">
        <h3>Δοκιμαστικά κουμπιά</h3>
        <button className="btn btn-primary m-3"
                onClick={() => store.dispatch(addCategory(createCategory()))}>Δημιουργία κατηγορίας
        </button>
        <button className="btn btn-primary"
                onClick={() => store.dispatch(incCategory(Math.ceil(Math.random() * curCatId)))}>
          Πρόσθεσε σε τυχαία κατηγορία
        </button>
      </div>
    </div>

  </Provider>
  , document.getElementById('root')
)