import Link from './LinkInput';
import classes from './Main.module.css';
import Card from './UI/Card';
import Image1 from '../assets/icon-brand-recognition.svg';
import Image2 from '../assets/icon-detailed-records.svg';
import Image3 from '../assets/icon-fully-customizable.svg';

const Main = () => {
  return (
    <section className={classes.main}>
      <Link />
      <h2 id='main'>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with <br /> our
        advanced statistics dashboard.
      </p>
      <div className={classes.cards}>
        <Card
          image={Image1}
          header='Brand Recognition'
          text=' Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content.'
        />
        <div className={classes.line}></div>
        <Card
          className={classes['card--2']}
          image={Image2}
          header='Detailed Records'
          text='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
        />
        <div className={classes.line}></div>
        <Card
          className={classes['card--3']}
          image={Image3}
          header='Fully Customizable'
          text='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
        />
      </div>
    </section>
  );
};

export default Main;
