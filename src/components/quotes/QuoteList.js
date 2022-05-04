import React, { Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


const QuoteList = (props) => {

  const [filter, setFilter] = useState('Ascending');
  const navigate = useNavigate();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const filterHandler = () => {
    setFilter(prevFilter => {
      return filter === 'Ascending' ? 'Descending' : 'Ascending';
    });
    navigate(`/quotes?sort=${filter === 'Ascending' ? 'asc' : 'desc'}`);

  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={filterHandler}>Sort {filter}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
