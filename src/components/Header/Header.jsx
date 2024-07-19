import React, { useState } from 'react';
import style from './Header.module.scss';
const Header = ({ toggletheme, theme, svg }) => {
  let darkorlightimg = '';

  return (
    <header className={style.Header}>
      <div className={style.headerContent}>
        <ul className={`${style.headerUl} ${theme}`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Content</li>
        </ul>
        <button className={style.changebutton} onClick={toggletheme}>
          {svg}
        </button>
      </div>
    </header>
  );
};

export default Header;
