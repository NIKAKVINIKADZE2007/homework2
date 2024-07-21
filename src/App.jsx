import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Section1 from './components/section1/Section1';
import Apps from './components/apps/Apps';

function App() {
  const [theme, setTheme] = useState('dark');
  let rame = 'dark';
  document.body.classList.add('dark-mode');

  const toggletheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'ligth' : 'dark'));
    document.body.classList.toggle('light-mode');
    rame = 'ligth';
  };

  return (
    <>
      <Header toggletheme={toggletheme} theme={theme} />
      <Section1 theme={theme} />
      <Apps theme={theme} />
    </>
  );
}

export default App;
