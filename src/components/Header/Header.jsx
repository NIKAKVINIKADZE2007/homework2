import React from 'react';
import style from './Header.module.scss';
const Header = ({ toggletheme, theme }) => {
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
        <button onClick={toggletheme}>click me</button>
      </div>
    </header>
  );
};

export default Header;
