import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
    {
        id: 'q1',
        author: 'Max',
        text: 'Learning new Things'
    },
    {
        id: 'q2',
        author: 'MacAndCheese',
        text: 'Learning how to make burguers'
    }
]


function AllQuotes() {
    return <QuoteList quotes={DUMMY_DATA} />
}

export default AllQuotes