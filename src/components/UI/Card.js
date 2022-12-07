import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <div>
        <img src={props.image} alt={props.header} />
      </div>
      <h3>{props.header}</h3>
      <p> {props.text}</p>
    </div>
  );
};

export default Card;
