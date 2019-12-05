import React from "react";
import {connect} from 'react-redux'
import {Icategory, MainStore, Poem} from "../intefaces";

const Poem = (props: { data: Poem[], categories: Icategory[] }) => {
  const poems = props.data
  const cats = props.categories

  console.log(cats, poems, poems.length, cats)

  const renderPoems = () => {
    return poems.map((poem, index) => {
      return (<div key={index} className="poem container-fluid mt-1 rounded p-3">
        <div className="text-center rel">
          <div className="num">{poem.id}</div>
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
    data: state.data,
    categories: state.categories,
  }
}


export default connect(mapStateToProps)(Poem)