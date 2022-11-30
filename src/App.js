import { Fragment } from 'react';
import Advice from './components/Advice';

function App() {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <Fragment>
      <Advice />
      <div className='footer'>
        <p className='name'>
          &copy; {year}{' '}
          <a target='blank' href='https://github.com/muideenpopoola'>
            Muideen Popoola
          </a>
        </p>
      </div>
    </Fragment>
  );
}

export default App;
