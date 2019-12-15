import React from "react";
import {Icategory, MainStore, Query, Search} from "../intefaces";
import {connect} from 'react-redux'

interface localProps {
  query: Query
  categories: Icategory[]
  search: Search,
}

const getSearchParamaters = (text?: string, num?: number) => {
  if (text !== null) {
    return (<span><br/>Σε κείμενα που περιέχουν το λήμμα: <strong>{text}</strong></span>)
  } else {
    if (num !== null) {
      return (<span><br/>Σε κείμενα που έχουν καταχωρηθεί με τον αριθμό: <strong>{num}</strong></span>)
    } else {
      return null
    }
  }
}

const updateInfo = (props: localProps): JSX.Element => {
  const {categories} = props

  if (categories.length > 0) {
    const {text, number} = props.search
    const {cat, order, sort} = props.query.filters
    const description = categories[cat] !== undefined ? categories[cat].description : ''
    return (<div className="alert text-center mb-0">
      <strong>Έρευνα σε</strong>«{description}»
      <br/><strong>Ταξινόμηση:</strong> «{order} - {sort}»{getSearchParamaters(text, number)}
    </div>)
  } else {
    return null
  }
}

const QueryDescription = (props: localProps) => (
  updateInfo(props)
)

const mapStateToProps = (state: MainStore) => (
  {
    query: state.query,
    categories: state.categories,
    search: state.search,
  })

export default connect(mapStateToProps)(QueryDescription)