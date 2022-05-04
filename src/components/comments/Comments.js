
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedData } = useHttp(getAllComments)

  const params = useParams()
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(
    () => {
      sendRequest(quoteId)
    },
    [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') {
    comments = <div className="centered">
      <LoadingSpinner />
    </div>
  }
  if (status === 'completed' && loadedData) {
    comments = <CommentsList comments={loadedData} />
  }

  if (status === 'completed' && (!loadedData || loadedData.length === 0)) {
    comments = <div className="centered">
      No comments were added yet.
    </div>
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      <p>Comments...</p>
      {comments}
    </section>
  );
};

export default Comments;
