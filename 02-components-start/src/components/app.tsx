import React from 'react'
import Card from './card'
import CardStatistics from './card-statistics'
import CardFilterCategories from './card-filter-categories'

const App = () => {
  return (
    <div id="container" className="container-fluid">
      <CardStatistics/>
      <Card {...{headerText: "Επιλογές", child: <CardFilterCategories/>}} />
    </div>
  )
}

export default App