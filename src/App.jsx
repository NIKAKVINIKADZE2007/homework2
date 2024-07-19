import React, { useState } from 'react';
import Header from './components/Header/Header';
import Section1 from './components/section1/Section1';
import './reset.scss';
function App() {
  const [theme, setTheme] = useState('dark');

  const toggletheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'ligth' : 'dark'));
  };

  return (
    <>
      <Header toggletheme={toggletheme} theme={theme} />
      <Section1 theme={theme} />
      <div className={theme}></div>
    </>
  );
}

export default App;
