import { Fragment, useState, useEffect } from 'react';
import classes from './LinkInput.module.css';
import LinkItems from './LinkItems';
import Button from './UI/Button';
import LoadingSpinner from './UI/LoadingSpinner';

const LinkInput = () => {
  const [enteredLink, setEnteredLink] = useState('');
  const [enteredLinkTouched, setEnteredLinkTouched] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    var storedList = JSON.parse(localStorage.getItem('list'));
    setLinkList(storedList ? storedList : []);
  }, []);

  const enteredLinkIsValid =
    enteredLink.includes('www.') || enteredLink.includes('http');
  const linkInputIsInvalid = !enteredLinkIsValid && enteredLinkTouched;

  const linkInputChangeHandler = (event) => {
    setEnteredLink(event.target.value);
  };

  const linkInputBlurHandler = (event) => {
    setEnteredLinkTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const fetchHandler = async () => {
      try {
        setIsLoading(true);
        setEnteredLinkTouched(true);

        if (!enteredLinkIsValid) {
          return;
        }

        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${enteredLink}.json`
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();

        const shortLink = data.result.full_short_link2;

        setLinkList(() => {
          return [{ link: enteredLink, shortLink: shortLink }, ...linkList];
        });

        localStorage.setItem(
          'list',
          JSON.stringify([
            { link: enteredLink, shortLink: shortLink },
            ...linkList,
          ])
        );

        setEnteredLinkTouched(false);
        setEnteredLink('');
      } catch (error) {
        setError(true);
      }
    };

    fetchHandler();
    setIsLoading(false);
  };

  return (
    <Fragment>
      <div className={classes['link-input']} id='resources'>
        <form onSubmit={formSubmitHandler}>
          <div>
            <input
              className={linkInputIsInvalid ? classes.errorinput : ''}
              placeholder='Shorten a link here...'
              type='text'
              onChange={linkInputChangeHandler}
              onBlur={linkInputBlurHandler}
              value={enteredLink}
            ></input>
            <Button>Shorten It!</Button>
          </div>
          {linkInputIsInvalid && (
            <p className='error'>Please add a valid link</p>
          )}
          {error && <p className='error'>Something went wrong</p>}
        </form>
      </div>
      <ul className={classes.lists}>
        {isLoading && <LoadingSpinner />}
        {linkList.map((items, i) => {
          return (
            <LinkItems
              link={items.link}
              shortLink={items.shortLink}
              id={i}
              key={i}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default LinkInput;
