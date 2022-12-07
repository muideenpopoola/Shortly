import { Link } from 'react-scroll';

import classes from './PreFooter.module.css';
import Button from './UI/Button';

const PreFooter = () => {
  return (
    <div className={classes['pre-footer']} id='prefooter'>
      <h2>Boost your links today</h2>
      <Link
        to='resources'
        activeClass='active'
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
      >
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default PreFooter;
