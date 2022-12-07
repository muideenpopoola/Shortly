import React, { useState } from 'react';
import { Link } from 'react-scroll';

import Logo from '../assets/logo.svg';
import classes from './Header.module.css';
import Button from './UI/Button';

const Header = () => {
  const [hideNav, setHideNav] = useState(true);

  const classesName = `${classes.header} ${hideNav ? classes.hide : ''}`;
  const hideNavHandler = () => {
    setHideNav(!hideNav);
  };

  return (
    <header className={classesName}>
      <nav>
        <div className={classes.homeContainer}>
          <img src={Logo} alt='Logo' />
          {hideNav && (
            <span className={classes.home} onClick={hideNavHandler}>
              &#9776;
            </span>
          )}
          {!hideNav && (
            <span className={classes.home} onClick={hideNavHandler}>
              &#9747;
            </span>
          )}
        </div>
        <ul>
          <li>
            <Link
              onClick={hideNavHandler}
              to='main'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              onClick={hideNavHandler}
              to='prefooter'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              onClick={hideNavHandler}
              to='resources'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Resources
            </Link>
          </li>
        </ul>
        <div className={classes.action}>
          <button>Login</button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
