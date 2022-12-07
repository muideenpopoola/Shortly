import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      onBlur={props.onBlur}
      className={`${classes.btn} ${props.className}`}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
