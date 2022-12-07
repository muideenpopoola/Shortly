import { useState } from 'react';

import Button from './UI/Button';
import classes from './LinkItems.module.css';

const LinkItems = (props) => {
  const [copied, setCopied] = useState(false);
  const { link, shortLink } = props;

  const clickedHandler = () => {
    setCopied(false);
    navigator.clipboard.writeText('');
    navigator.clipboard.writeText(shortLink);
    setCopied(true);
  };

  const blurHandler = () => {
    setCopied(false);
  };

  return (
    <li className={classes.list}>
      <p>{link}</p>
      <div className={copied ? classes.divbtn : ''}>
        <a target='_blank' rel='noreferrer'  href={shortLink} id={props.id}>
          {shortLink}
        </a>
        <Button onClick={clickedHandler} id={props.id} onBlur={blurHandler}>
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
    </li>
  );
};

export default LinkItems;
