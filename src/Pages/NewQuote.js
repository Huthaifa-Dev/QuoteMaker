import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'
const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed');
    }, [status])

    const newQuoteHandler = (quoteData) => {
        sendRequest(quoteData)



        console.log(quoteData)
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={newQuoteHandler} />
    )
}

export default NewQuote