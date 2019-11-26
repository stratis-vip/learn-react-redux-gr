import React from 'react'
import { MainStore, Category } from '../intefaces'
import { connect } from 'react-redux'

class Statistics extends React.Component<{ categories: Category[] | [] }> {

    total() {
        const { categories } = this.props
        let total = 0
        for (let cat of categories)
            total += cat.cc
        return <li><strong>Σύνολο: </strong>{total} εγγραφές</li>
    }
    
    renderStatistics() {
        const { categories } = this.props

        return ((categories as Category[]).map(cat => {
                return <li key={cat.id}><strong>{cat.description}:</strong> {cat.cc} εγγραφές</li>
            })
        ) 
    }

    render() {
        return (
            <ul>
                {this.renderStatistics()}
                {this.total()}
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