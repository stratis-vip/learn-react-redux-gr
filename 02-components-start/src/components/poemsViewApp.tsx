import React from 'react'
import ResultsDescription from "./results-description";
import Pagination from "./pagination";
import Poem from "./poem";


const PoemsViewApp: React.FC = () => {

  return <div className="container">
    <ResultsDescription/>
    <Pagination/>

    <div className="container pt-1" id="results">
      <Poem/>
    </div>
  </div>


}

export default PoemsViewApp