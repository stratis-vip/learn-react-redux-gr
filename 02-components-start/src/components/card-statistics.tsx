import React from 'react'
import Statistics from './statistics'
import Card from './card'
import {Icategory, MainStore} from '../intefaces'
import {connect} from 'react-redux'
import {sumOfCategoriesRecords} from './helpers'


const CardStatistics = (props: { categories: Icategory[] }) => {
  const {categories} = props
  let isReady = categories.length !== 0

  const records = sumOfCategoriesRecords(categories)
  let header = 'Στατιστικά '
  header += records === 0 ? `` : ` {${records} εγγραφές}`
  return (
    <Card {...{headerText: header, isReady: isReady, child: <Statistics/>}} />
    // TODO: Να βρίσκει το Ερρορ και να το ενεργοποιεί
  )
}

const mapStateToProps = (state: MainStore) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CardStatistics)

