import React from 'react'
import {Icategory, MainStore} from '../intefaces'
import {connect} from 'react-redux'
import {sumOfCategoriesRecords, waitForServer} from './helpers'

interface LocalProps {
  categories: Icategory[] | []
}

const getCatArray = (catArray: Icategory[]): Icategory[] => {
  return catArray.filter(a => a.id !== 0)
}

const getSumOfCategories = (props: LocalProps): JSX.Element => {
  const categories = props.categories
  // if (categories.length === 0) return null
  // const sum:number = getCatArray(categories).map(a => a.cc).reduce((a, b) => a+ b)
  return (<li key="-1"><strong>Σύνολο:</strong> {sumOfCategoriesRecords(categories)} εγγραφές</li>)
}

const renderStatistics = (props: LocalProps) => {
  const categories = props.categories
  if (categories.length === 0) return <li>{waitForServer()}</li>
  return getCatArray(categories).map(cat => {
    return <li key={cat.id}><strong>{cat.description}:</strong> {cat.cc} εγγραφές</li>
  })
}

const Statistics: React.FC<LocalProps> = (props: LocalProps) => {
  return (
    <ul className="list-unstyled mb-0 ml-2">
      {renderStatistics(props)}
      {getSumOfCategories(props)}
    </ul>
  )
}
// class Statistics extends React.Component<{ categories: Icategory[] | [] }> {
//   renderStatistics() {
//     const {categories} = this.props
//     if (categories.length === 0) return <li>{waitForServer()}</li>
//     return ((categories as Icategory[]).filter(a => a.id !== 0).map(cat => {
//         return <li key={cat.id}><strong>{cat.description}:</strong> {cat.cc} εγγραφές</li>
//       })
//     )
//   }
//
//   render() {
//     return (
//       <ul className="list-unstyled mb-0 ml-2">
//         {this.renderStatistics()}
//       </ul>
//     )
//   }
// }

const mapStateToProps = (state: MainStore) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Statistics)