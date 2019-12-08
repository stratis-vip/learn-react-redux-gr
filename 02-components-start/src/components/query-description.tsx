import React from "react";
import {Icategory, MainStore, Query, Search} from "../intefaces";
import {connect} from 'react-redux'

interface locaProps {
  query: Query
  categories: Icategory[]
  search: Search
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

const updateInfo = (props: locaProps) => {
  const {categories} = props

  if (categories.length > 0) {
    const {text, number} = props.search
    const {cat, order, sort} = props.query.filters
    const description = categories[cat] !== undefined ? categories[cat].description : ''
    return (<div>
      <strong>Έρευνα σε</strong>«{description}»
      <br/><strong>Ταξινόμηση:</strong> «{order} - {sort}»{getSearchParamaters(text, number)}
    </div>)
  }
  return ''
}

const QueryDescription = (props: locaProps) => (
  <div className="alert text-center mb-0">
    {updateInfo(props)}
  </div>
)

const mapStateToProps = (state: MainStore) => (
  {
    query: state.query,
    categories: state.categories,
    search: state.search
  })

export default connect(mapStateToProps)(QueryDescription)