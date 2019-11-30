import React from 'react'
import Card from './card'
import CardStatistics from './card-statistics'
import CardFilterCategories from './card-filter-categories'
import Search from "./search";

const App = () => {

  return <div className="row">
    <div className="col-sm-12 col-lg-5">
      <div id="container" className="container-fluid">
        <CardStatistics />
        <Card {...{ headerText: "Επιλογές", child: <CardFilterCategories /> }} />
        <Card {...{ headerText: "Αναζήτηση", child: <Search /> }} />
      </div>
    </div>
    <div className="col-sm-12 col-lg-7">
      <h3>centered, περίληψη αποτελεσμάτων αναζήτησης</h3>
      <h3>Πατζινάετιον</h3>

      <h3>Αποτελέσματα αναζήτησης</h3>
    </div>
  </div>
}

export default App