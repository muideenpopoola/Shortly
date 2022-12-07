import { Fragment } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import PreFooter from './components/PreFooter';

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Main />
      <PreFooter />
      <Footer />
    </Fragment>
  );
}

export default App;
