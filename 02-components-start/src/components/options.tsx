import React from 'react'
import { Category, MainStore, Filters } from '../intefaces'
import { connect } from 'react-redux'
import { waitForServer } from './helpers'
import { bindActionCreators } from 'redux'
import { addCat, ORDER, SORT, addOrder, addSort } from '../actions/filters'

const Options = (props: { categories: Category[], filters: Filters, addCat: any, addOrder:any, addSort:any }) => {
    const { categories, addCat, addOrder, addSort} = props
    const { cat, order, sort } = props.filters
    const changeFilterHandler = (ev) => {
        const value = parseInt(ev.target.value)
        addCat(value)
    }
    const changeOrderHandler =(ev) => {
        const index = ev.target.selectedIndex
        addOrder(ev.target[index].text)
    }
    const changeSortHandler =(ev) => {
        const index = ev.target.selectedIndex
        addSort(ev.target[index].text)
    }

    const firstRow = () => {
        return (
            <li key={0} ><input
                className="form-check-input" type="radio" name="category"
                value='0'
                onChange={changeFilterHandler}
                checked={cat === 0 ? true : false}
            />Όλες οι κατηγορίες</li>
        )
    }

    const renderFilters = () => {
        if (categories.length === 0) return <li>{waitForServer()}</li>
        return (
            categories.map((category, index) => {
                return <li key={category.id} ><input
                    className="form-check-input" type="radio" name="category"
                    value={category.id}
                    checked={cat === index + 1 ? true : false}
                    onChange={changeFilterHandler}
                />{category.description} </li>
            })
        )
    }

    const renderOrder = () => {
        const keys = Object.keys(ORDER)
        return keys.map((ord, index)=>{
            return <option key={index} value={index}>{ORDER[ord]} </option>}
        )
    }

    const renderTax = () => {
        const keys = Object.keys(SORT)
        return keys.map((sor, index)=>{
            return <option key={index} value={index} >{SORT[sor] }</option>}
        )
    }

    return (
        <form id="category" className="form-check" action="none">
            <ul className="list-unstyled mb-0">
                {categories.length !== 0 ? firstRow() : null}
                {renderFilters()}
                <div hidden={categories.length === 0} className="mt-3">
                    <select className="form-control" id="tax" defaultValue={order}
                    onChange={changeOrderHandler}>
                        {renderOrder()}
                    </select>
                    <select className="form-control mt-3" id="ascdesc" defaultValue={sort}
                    onChange={changeSortHandler}>
                        {renderTax()}
                    </select>

                </div>
            </ul>
        </form>
    )

}

const mapStateToProps = (state: MainStore) => {
    return {
        categories: state.categories,
        filters: state.query.filters
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ addCat, addOrder, addSort }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Options)