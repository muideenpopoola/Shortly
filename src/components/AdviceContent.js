import React, { Fragment, useEffect, useState } from 'react';

import classes from './AdviceContent.module.css';
import Dice from '../assets/icon-dice.svg';

const AdviceContent = (props) => {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.adviceslip.com/advice');

    if (!response) {
      throw new Error('Unable to fetch an advice, please try again.');
    }

    const data = await response.json();

    setAdvice({ advice: data.slip.advice, id: data.slip.id });
    setIsLoading(false);
    setDisable(true);
    setTimeout(() => setDisable(false), 1500);
  };

  useEffect(() => {
    try {
      fetchQuote();
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <Fragment>
      <h2 className={classes.header}>Advice {advice.id}</h2>
      {isLoading && (
        <div className={classes.container}>
          <div className={classes['lds-spinner']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {!isLoading && !error && (
        <p className={classes.main}>"{advice.advice}"</p>
      )}
      {!isLoading && error && <p className={classes.main}>{error}</p>}
      <div className={classes.img}></div>
      <button onClick={fetchQuote} className={classes.dice} disabled={disable}>
        <img alt='Dice' src={Dice} />
      </button>
      
    </Fragment>
  );
};

export default AdviceContent;
