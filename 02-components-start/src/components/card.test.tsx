import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Card from './card'
import {act} from 'react-dom/test-utils'

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
  act( ()=> {render(<Card />, container) })
  expect(container.textContent).toBe('')
})

it('Βάζει κείμενο στη κάρτα', () => {
    act( ()=> {render(<Card {...{mainText: "main"}}/>, container) })
    expect(container.textContent).toBe('main')
  })

  it('Βάζει κείμενο στη κεφαλίδα', () => {
    act( ()=> {render(<Card {...{headerText: "header"}}/>, container) })
    expect(document.querySelector('.card-header').textContent).toBe('header')
  })

  it('Βάζει κείμενο στo λάθος', () => {
    act( ()=> {render(<Card {...{errorText: "error"}}/>, container) })
    expect(document.querySelector('.contentError').textContent).toBe('error')
  })
  

