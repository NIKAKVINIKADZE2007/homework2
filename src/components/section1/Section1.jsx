import React from 'react';
import Cv from './section1-part1/Cv';
import Scosials from './section1-part1/Scosials';
import style from './Section1.module.scss';

const Section1 = ({ theme }) => {
  let imgSrc = '../public/Group 148.png';
  return (
    <section className={style.section1}>
      <div className={style.CvAndSocial}>
        <Cv theme={theme} />
        <Scosials />
      </div>
      <img src={imgSrc} alt='picture' />
    </section>
  );
};

export default Section1;
