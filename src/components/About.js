import React from 'react';
import { Link } from 'react-scroll';

import classes from './About.module.css';
import Button from './UI/Button';
import Image from '../assets/illustration-working.svg';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.textbox}>
        <h1>
          More than just <br />
          shorter link
        </h1>
        <h3>
          Build your brand's recognition and get detailed
          <br /> insights on how your links are performing.
        </h3>

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
      <div className={classes.imgbox}>
        <img src={Image} alt='Working' />
      </div>
    </section>
  );
};

export default About;
