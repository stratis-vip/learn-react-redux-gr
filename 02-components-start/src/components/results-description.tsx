import React from "react";
import {connect} from 'react-redux'
import {MainStore, Pagination} from "../intefaces";
import {bindActionCreators} from "redux";
import {setResultsPerPage} from "../actions/pagination";

const createRadioBox = (pagination, fn) => {
  const data = [1, 5, 10]
  return data.map((key, index) => {
    return (
      <div key={index} className="form-check form-check-inline">
        <input data-key={key} className="form-check-input" type="radio" name="resPerPage"
               checked={pagination.resultsPerPage === key}
               onChange={() => {
                 fn(key)
               }}/>
        <label className="form-check-label">{key}</label>
      </div>)
  })
}

const ResultsDescription = (props: { pagination: Pagination, setResultsPerPage: any }) => {
  const {pagination} = props
  const setResults = props.setResultsPerPage
  return (
    <div className="text-center">
      <div className="alert alert-info m-0">
        <p className="m-0">
          {pagination.results !== 0 ? `Βρέθηκαν ${pagination.results} εγγραφές.` : `Δεν υπάρχουν αποτελέσματα!`}
        </p>
        <p className="d-inline mr-2">
          Αποτελ. ανα σελίδα </p>
        {createRadioBox(pagination, setResults)}
      </div>
    </div>
  )
}

const mapStateToProps = (state: MainStore) => {
  return {
    pagination: state.pagination
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({setResultsPerPage}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(ResultsDescription)