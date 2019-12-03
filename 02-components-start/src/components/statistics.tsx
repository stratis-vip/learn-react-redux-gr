import React from 'react'
import {Icategory, MainStore} from '../intefaces'
import {connect} from 'react-redux'
import {waitForServer} from './helpers'

class Statistics extends React.Component<{ categories: Icategory[] | [] }> {
  renderStatistics() {
    const {categories} = this.props
    if (categories.length === 0) return <li>{waitForServer()}</li>
    return ((categories as Icategory[]).map(cat => {
        return <li key={cat.id}><strong>{cat.description}:</strong> {cat.cc} εγγραφές</li>
      })
    )
  }

  render() {
    return (
      <ul className="list-unstyled mb-0">
        {this.renderStatistics()}
      </ul>
    )
  }
}

const mapStateToProps = (state: MainStore) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Statistics)