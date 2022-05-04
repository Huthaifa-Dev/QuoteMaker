import { useNavigate } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/quotes/${props.id}`)
  }
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn' onClick={goToDetails}>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
