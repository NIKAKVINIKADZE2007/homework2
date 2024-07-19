import React from 'react';
import style from './Cv.module.scss';
const Cv = ({ theme }) => {
  return (
    <div className={style.cv}>
      <p className={`${style.name} ${theme}`}>Hi, I am Chukwukwe Chisom</p>
      <p className={style.frontendDev}>Frontend Developer</p>
      <button className={style.DownloadCv}>Download CV</button>
    </div>
  );
};

export default Cv;
