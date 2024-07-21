import React from 'react';
import style from './Header.module.scss';
import svg2 from '/Vector (3).svg';
import svg1 from '/Vector (4).svg';
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
        <button className={style.changebutton} onClick={toggletheme}>
          <img src={theme == 'dark' ? svg1 : svg2} alt='' />
        </button>
      </div>
    </header>
  );
};

export default Header;
