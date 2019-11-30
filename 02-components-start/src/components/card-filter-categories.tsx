import React from 'react'
import Options from './options'
import Card from './card'
import { MainStore, Category, Filters } from '../intefaces'
import { connect } from 'react-redux'

const normalize = (num: number) => {
    return num === 0 ? 0 : num - 1
}

const CardFilterCategories = (props: { categories: Category[], filters: Filters }) => {
    const { categories } = props
    const { cat } = props.filters

    let isReady = categories.length === 0 ? false : true

    let header = 'Φίλτρα '
    if (categories.length === 0) { header = 'Φίλτρα ' } else {
        if (cat === 0) { header += `{Όλες οι κατηγορίες}` } else {
            console.log(cat, normalize(cat), categories, categories[normalize(cat)])
            header += `{${categories[normalize(cat)].description}}`
        }
    }
    
    return (
        <Card {...{ headerText: header, isReady: isReady, child: <Options /> }} />
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