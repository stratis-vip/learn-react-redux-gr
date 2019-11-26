import { createStore } from "redux"
import rootReducer from "."
import { addData, clearData, addDataArray } from "../actions/data"
import { Poem } from "../intefaces"

let store = null
const alfa: Poem = {
    category: 1,
    id: 23,
    imnia_auth: '2013-12-11',
    keimeno: 'κειμενο',
    keimeno_id: 214
}
const bita: Poem = {
    category: 2,
    id: 35,
    imnia_auth: '2016-02-16',
    keimeno: 'κειμενο δυο',
    keimeno_id: 45
}
const ar = [alfa, bita]

const initStore = () => createStore(rootReducer)
beforeEach(() => store = initStore())

describe("Data", () => {
    it('"Add"', () => {
        store.dispatch(addData(alfa))
        const data: Poem[] = store.getState().data
        expect(data[0].category).toBe(1)
        expect(data[0].id).toBe(23)
        expect(data[0].imnia_auth).toBe('2013-12-11')
        expect(data[0].keimeno).toBe('κειμενο')
        expect(data[0].keimeno_id).toBe(214)

        store.dispatch(addData(bita))
        const newData: Poem[] = store.getState().data
        expect(newData[1].category).toBe(2)
        expect(newData[1].id).toBe(35)
        expect(newData[1].imnia_auth).toBe('2016-02-16')
        expect(newData[1].keimeno).toBe('κειμενο δυο')
        expect(newData[1].keimeno_id).toBe(45)
    })

    it('"Clear"', () => {
        store.dispatch(addData(alfa))
        store.dispatch(addData(bita))
        const data: Poem[] = store.getState().data
        expect(data.length).toBe(2)
        store.dispatch(clearData())
        const newData: Poem[] = store.getState().data
        expect(newData.length).toBe(0)
    })

    it('"Add Array"', () => {
        store.dispatch(addDataArray(ar, false))
        // store.dispatch(addData(bita))
        const data: Poem[] = store.getState().data
        expect(data.length).toBe(2)
        store.dispatch(addDataArray(ar, false))
        const newData: Poem[] = store.getState().data
        expect(newData.length).toBe(4)
        store.dispatch(addDataArray(ar))
        const newData1: Poem[] = store.getState().data
        expect(newData1.length).toBe(2)

    })
})