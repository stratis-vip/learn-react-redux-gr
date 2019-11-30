import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Statistics from './statistics'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import mockStore from '../store'
import { addCategory, resetCategories } from '../actions/category'
import { Category } from '../intefaces'

const cat1:Category = {id: 1, description: "Ποιητικά", cc:34}
const cat2:Category = {id: 2, description: "Λογοπλοκίες", cc:215}
const cat3:Category = {id: 3, description: "Διάφορα", cc:894}
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
                <Statistics />
            </Provider>, container)
    })
    expect(container.textContent).toBe('Αναμονή φόρτωσης δεδομένων από τον σέρβερ')
})

it('Δημιουργείται κανονικά', () => {
    act(() => {
        render(
            <Provider store={mockStore}>
                <Statistics />
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




