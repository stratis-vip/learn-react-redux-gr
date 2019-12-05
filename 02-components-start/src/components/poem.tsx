import React from "react";
import {connect} from 'react-redux'
import {Icategory, MainStore, Pagination, Poem} from "../intefaces";

const Poem = (props: { poems: Poem[], cats: Icategory[], page: Pagination }) => {
  const {poems, cats, page} = props


  const renderPoems = () => {
    return poems.map((poem, index) => {
      return (<div key={index} className="poem container-fluid mt-1 rounded p-3">
        <div className="text-center rel">
          <div className="num">{(page.page - 1) * page.resultsPerPage + index + 1}</div>
          <div>ΑΚ {poem.id} [{cats.length > 0 ? cats[poem.category].description : ''} #{poem.keimeno_id} ({poem.imnia_auth})]</div>
          <div className="container-fluid bg-light rounded p-3 text-left">{poem.keimeno}</div>
        </div>
      </div>)
    })
  }

  return renderPoems()

}

const mapStateToProps = (state: MainStore) => {
  return {
    poems: state.data,
    cats: state.categories,
    page: state.pagination
  }
}


export default connect(mapStateToProps)(Poem)