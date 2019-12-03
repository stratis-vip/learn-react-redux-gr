import rootReducer from "./index"
import {Icategory} from "../intefaces"
import {createStore} from "redux"
import {addCategory, incCategory, resetCategories} from "../actions/category"

let store = null
const initStore = () => createStore(rootReducer)
beforeEach(() => store = initStore())

test("Store must exists", () => {
    expect(store).not.toBe(null)
    const state = store.getState()
    expect((state.categories as Array<Icategory>)).toStrictEqual([])
    expect(state.query.filters.cat).toBe(0)
    expect(state.query.what).toStrictEqual([])
    // expect(state.pagination.page).toBe(1)
})

describe("Categories Test", () => {
    it("Add one Category", () => {
        store.dispatch(addCategory({ id: 1, description: "Ποιητικά", cc: 320 }))
        const category = store.getState().categories[0]
        expect(category.id).toBe(1)
        expect(category.cc).toBe(320)
        expect(category.description).toBe("Ποιητικά")
    })

    it("Add two Categories", () => {
        store.dispatch(addCategory({ id: 1, description: "Ποιητικά", cc: 320 }))
        store.dispatch(
            addCategory({ id: 2, description: "Λογοπλοκίες", cc: 207 })
        )
        const cat = store.getState().categories
        expect(cat[0].id).toBe(1)
        expect(cat[0].cc).toBe(320)
        expect(cat[0].description).toBe("Ποιητικά")
        expect(cat[1].id).toBe(2)
        expect(cat[1].cc).toBe(207)
        expect(cat[1].description).toBe("Λογοπλοκίες")
    })

    it("Increase Category cc", () => {
        store.dispatch(addCategory({ id: 1, description: "Ποιητικά", cc: 320 }))
        store.dispatch(
            addCategory({ id: 2, description: "Λογοπλοκίες", cc: 207 })
        )
        store.dispatch(incCategory(1))
        store.dispatch(incCategory(2))
        const cat = store.getState().categories
        expect(cat[0].id).toBe(1)
        expect(cat[0].cc).toBe(321)
        expect(cat[0].description).toBe("Ποιητικά")
        expect(cat[1].id).toBe(2)
        expect(cat[1].cc).toBe(208)
        expect(cat[1].description).toBe("Λογοπλοκίες")
    })

    it("Reset", () => {
        store.dispatch(addCategory({ id: 1, description: "Ποιητικά", cc: 320 }))
        store.dispatch(
            addCategory({ id: 2, description: "Λογοπλοκίες", cc: 207 })
        )
        store.dispatch(incCategory(1))
        store.dispatch(incCategory(2))
        const cat = store.getState().categories
        expect(cat[0].id).toBe(1)
        expect(cat[0].cc).toBe(321)
        expect(cat[0].description).toBe("Ποιητικά")
        expect(cat[1].id).toBe(2)
        expect(cat[1].cc).toBe(208)
        expect(cat[1].description).toBe("Λογοπλοκίες")
        store.dispatch(resetCategories())
        const newCat = store.getState().categories
        expect(newCat).toStrictEqual([])
    })
})