import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import Statistics from './statistics'
import {act} from 'react-dom/test-utils'
import {Provider} from 'react-redux'
import mockStore from '../store'
import {addCategory, resetCategories} from '../actions/category'
import {Icategory} from '../intefaces'

const cat1: Icategory = {id: 1, description: "Ποιητικά", cc: 34, max: 123}
const cat2: Icategory = {id: 2, description: "Λογοπλοκίες", cc: 215, max: 123}
const cat3: Icategory = {id: 3, description: "Διάφορα", cc: 894, max: 123}
let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('Δημιουργείται κανονικά', () => {
  act(() => {
    render(
      <Provider store={mockStore}>
        <Statistics/>
      </Provider>, container)
  })
  expect(container.textContent).toBe('Αναμονή φόρτωσης δεδομένων από τον σέρβερ')
})

it('Δημιουργείται κανονικά', () => {
  act(() => {
    render(
      <Provider store={mockStore}>
        <Statistics/>
      </Provider>, container)
  })
  mockStore.dispatch(addCategory(cat1))
  expect(container.textContent).toBe(`${cat1.description}: ${cat1.cc} εγγραφές`)

  mockStore.dispatch(addCategory(cat2))
  mockStore.dispatch(addCategory(cat3))
  expect(mockStore.getState().categories.length).toBe(3)
  mockStore.dispatch(resetCategories())
  expect(container.textContent).toBe(`Αναμονή φόρτωσης δεδομένων από τον σέρβερ`)
})




