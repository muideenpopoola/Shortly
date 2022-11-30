import React from 'react';

import classes from './Advice.module.css';
import AdviceContent from './AdviceContent';

const Advice = () => {
  return (
    <div className={classes.box}>
      <AdviceContent />
    </div>
  );
};

export default Advice;
