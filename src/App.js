import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
// import NewQuote from "./Pages/NewQuote";
// import QuoteDetail from "./Pages/QuoteDetail";
// import ErrorPage from "./Pages/ErrorPage";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import('./Pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./Pages/QuoteDetail'))
const ErrorPage = React.lazy(() => import('./Pages/ErrorPage'))
function App() {

  return (
    <Layout>
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      } >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} exact />
          <Route path="quotes" element={<AllQuotes />} exact />
          <Route path="quotes/:quoteId" element={<QuoteDetail />}>
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="new-quote" element={<NewQuote />} exact />
          <Route path="*" element={<ErrorPage />} exact />

        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
