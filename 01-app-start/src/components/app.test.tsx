import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import App from './app'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})


it('Δημιουργείται κανονικά', () => {
  const stringText = "Δοκιμαστικό component"
  render(<App text={stringText} />, container)
  expect(container.textContent).toBe(stringText)
})




