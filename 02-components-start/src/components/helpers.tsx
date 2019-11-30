import React from 'react'
import { Category } from '../intefaces'

export const waitForServer = () => (
    <div className='alert-primary'>
        <img src="/imgs/load.gif" />
        Αναμονή φόρτωσης δεδομένων από τον σέρβερ
    </div>
)

export const sumOfCategoriesRecords = (categories: Category[]) => {
    let total = 0
    for (let cat of categories)
        total += cat.cc
    return total
}