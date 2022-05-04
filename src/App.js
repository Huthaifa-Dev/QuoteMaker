import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import ErrorPage from "./Pages/ErrorPage";
import Comments from "./components/comments/Comments";


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} exact />
        <Route path="quotes" element={<AllQuotes />} exact />
        <Route path="quotes/:quoteId" element={<QuoteDetail />}>
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="new-quote" element={<NewQuote />} exact />
        <Route path="*" element={<ErrorPage />} exact />

      </Routes>
    </Layout>
  );
}

export default App;
