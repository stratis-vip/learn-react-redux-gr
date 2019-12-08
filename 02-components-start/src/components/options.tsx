import React from 'react'
import {Filters, Icategory, MainStore} from '../intefaces'
import {connect} from 'react-redux'
import {waitForServer} from './helpers'
import {bindActionCreators} from 'redux'
import {addCat, addOrder, addSort, ORDER, SORT} from '../actions/filters'
import {clearQueryWhere, setQueryWhere} from "../actions/query";

const Options = (props: {
  categories: Icategory[], filters: Filters,
  addCat: any, addOrder: any, addSort: any, setWhere: any, clearWhere: any
}) => {
  const {categories, addCat, addOrder, addSort, setWhere, clearWhere} = props
  const {cat, order, sort} = props.filters
  const changeFilterHandler = (ev) => {
    const value = isNaN(parseInt(ev.target.value)) ? 0 : parseInt(ev.target.value)
    value === 0 ? clearWhere() : setWhere(` category = ${value}`)
    addCat(value)
  }
  const changeOrderHandler = (ev) => {
    const index = ev.target.selectedIndex
    addOrder(ev.target[index].text)
  }
  const changeSortHandler = (ev) => {
    const index = ev.target.selectedIndex
    addSort(ev.target[index].text)
  }

  const renderFilters = () => {
    if (categories.length === 0) return <li>{waitForServer()}</li>
    return (
      categories.map((category, index) => {
        return <li key={category.id}><input
          className="form-check-input" type="radio" name="category"
          value={category.id}
          checked={cat === index}
          onChange={changeFilterHandler}
        />{category.description} </li>
      })
    )
  }

  const renderOrder = () => {
    const keys = Object.keys(ORDER)
    return keys.map((ord, index) => {
        return <option key={index} value={index}>{ORDER[ord]} </option>
      }
    )
  }

  const renderTax = () => {
    const keys = Object.keys(SORT)
    return keys.map((sor, index) => {
        return <option key={index} value={index}>{SORT[sor]}</option>
      }
    )
  }

  return (
    <form id="category" className="form-check" action="">
      <ul className="list-unstyled mb-0">
        {/*{categories.length !== 0 ? firstRow() : null}*/}
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
  return bindActionCreators({
    addCat, addOrder, addSort, setWhere: setQueryWhere,
    clearWhere: clearQueryWhere
  }, dispatch)

}
export default connect(mapStateToProps, matchDispatchToProps)(Options)