import React from 'react'
import Search from "./search";
import QueryDescription from "./query-description";
import ResultsDescription from "./results-description";
import Pagination from "./pagination";
import Poem from "./poem";
import Options from "./options";
import {refreshDataFromServer, resetAllFiltersQueries} from "../apiConnect";
import ModeShow from "./mode-shown";
import ExecuteSearch from "./ExecuteSearch";


const App: React.FC = () => {

  return <div className="row">

    <div id="left" className="col-sm-12 col-lg-5">
      <ModeShow/>
      <div id="container" className="container-fluid">
        <div className="epikefalida m-1 h4 alert text-center">Επιλογές</div>
        <div className="m-2">
          <Options/>
          <Search/>
          <QueryDescription/>
          <ExecuteSearch/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="container-fluid">
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