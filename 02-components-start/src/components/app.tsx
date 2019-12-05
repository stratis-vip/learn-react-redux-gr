import React from 'react'
import Card from './card'
import CardStatistics from './card-statistics'
import CardFilterCategories from './card-filter-categories'
import Search from "./search";
import QueryDescription from "./query-description";
import ResultsDescription from "./results-description";
import Pagination from "./pagination";
import Poem from "./poem";

const App: React.FC = () => {

  return <div className="row">
    <div className="col-sm-12 col-lg-5">
      <div id="container" className="container-fluid">
        <CardStatistics/>
        <Card {...{headerText: "Επιλογές", child: <CardFilterCategories/>}} />
        <Card {...{headerText: "Αναζήτηση", child: <Search/>}} />
      </div>
    </div>
    <div className="col-sm-12 col-lg-7">
      <div className="container-fluid">
        <QueryDescription/>
        <ResultsDescription/>
        <Pagination/>
        <div className="container-fluid pt-1" id="results">
          <Poem/>
        </div>
      </div>
    </div>
  </div>
}

export default App