import React from 'react'
import Options from './options'
import Card from './card'
import {Filters, Icategory, MainStore} from '../intefaces'
import {connect} from 'react-redux'

const normalize = (num: number) => {
  return num === 0 ? 0 : num - 1
}

const CardFilterCategories = (props: { categories: Icategory[], filters: Filters }) => {
  const {categories} = props
  const {cat} = props.filters

  let isReady = categories.length !== 0

  let header = 'Φίλτρα '
  if (categories.length === 0) {
    header = 'Φίλτρα '
  } else {
    if (cat === 0) {
      header += `{Όλες οι κατηγορίες}`
    } else {
      console.log(cat, normalize(cat), categories, categories[normalize(cat)])
      header += `{${categories[normalize(cat)].description}}`
    }
  }

  return (
    <Card {...{headerText: header, isReady: isReady, child: <Options/>}} />
    // TODO: Να βρίσκει το Ερρορ και να το ενεργοποιεί
  )
}

const mapStateToProps = (state: MainStore) => {
    return {
        categories: state.categories,
        filters: state.query.filters
    }
}

export default connect(mapStateToProps)(CardFilterCategories)