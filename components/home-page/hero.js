import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Shanky.jpg'
          alt='An Image showingg Shashank'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Shashank!</h1>
      <p>
        I blog about tech stack which a developer should know while his entire
        journey.
      </p>
    </section>
  );
};

export default Hero;
