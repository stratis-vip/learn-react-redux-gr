import React from 'react'
import Search from "./search";
import QueryDescription from "./query-description";
import ResultsDescription from "./results-description";
import Pagination from "./pagination";
import Poem from "./poem";
import Options from "./options";
import {refreshDataFromServer, resetAllFiltersQueries} from "../apiConnect";

const App: React.FC = () => {

  return <div className="row">
    <div id="left" className="col-sm-12 col-lg-5">
      <div id="container" className="container-fluid">
        <div className="epikefalida m-1 h4 alert text-center">Επιλογές</div>
        <div className="m-2">
          <h5>Αναζήτηση σε:</h5>
          <Options/>
          <h5>Εύρεση:</h5>
          <Search/>
          <QueryDescription/>
          <div className="text-center">
            <button className="btn btn-primary mt-2" onClick={refreshDataFromServer}>Αναζήτηση</button>
            <button className="btn btn-danger mt-2 ml-2" onClick={resetAllFiltersQueries}>Μηδενισμός φίλτρων</button>
          </div>
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