import React from 'react'
import { Link, Route, Routes, useMatch, useParams } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';

import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

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



function QuoteDetail() {

    const params = useParams();
    const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId)
    const match = useMatch(`/quotes/:quoteId`);

    if (!quote) {
        return <p>No quote found</p>
    }
    // console.log(match);

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Routes>
                <Route path={''} element={
                    <div className="centered">
                        <Link className="btn--flat" to={`${match.pathname}/comments`}>Load Comments</Link>
                    </div>
                } exact />
                <Route path={'comments'} element={<Comments />} />
            </Routes>
        </Fragment>
    )
}

export default QuoteDetail