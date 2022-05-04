import React, { useEffect } from 'react'
import { Link, Route, Routes, useMatch, useParams } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';

import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

function QuoteDetail() {

    const params = useParams();
    // const match = useMatch(`/quotes/:quoteId`);
    // console.log(match)
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className="centered">{error}</p>
    }

    if (!loadedQuote.text) {
        return <div className="centered">
            <p>No quote found</p>
        </div>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Routes>
                <Route path={''} element={
                    <div className="centered">
                        <Link className="btn--flat" to={`/quotes/${loadedQuote.id}/comments`}>Load Comments</Link>
                    </div>
                } exact />
                <Route path={'/comments'} element={<Comments />} />
            </Routes>
        </Fragment>
    )
}

export default QuoteDetail