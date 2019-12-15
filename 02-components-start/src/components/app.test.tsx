import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import PoemsViewApp from './poemsViewApp'
import {mockStore} from '../store'
import {act} from 'react-dom/test-utils'
import {Provider} from 'react-redux'

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
  act(() => {
    render(
      <Provider store={mockStore}>
        <PoemsViewApp/>
      </Provider>, container)
  })

  expect(container as HTMLDivElement).not.toBe(null)
  expect((container as HTMLDivElement).childNodes.length).toBe(1)

})



