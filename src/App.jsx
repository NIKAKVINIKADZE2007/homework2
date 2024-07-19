import React, { useState } from 'react';
import Header from './components/Header/Header';
import Section1 from './components/section1/Section1';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('dark');
  const [svg, setSvg] = useState();

  const changesvg = () => {
    theme == 'dark'
      ? setSvg(
          <svg
            width='17'
            height='27'
            viewBox='0 0 17 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.92366 1.63391e-05C2.59264 -0.00209708 1.26924 0.200825 0 0.601644C2.65555 1.43618 4.97558 3.09621 6.62261 5.34025C8.26963 7.58429 9.15774 10.2953 9.15774 13.0789C9.15774 15.8625 8.26963 18.5735 6.62261 20.8175C4.97558 23.0616 2.65555 24.7216 0 25.5561C1.79842 26.1213 3.69777 26.291 5.56791 26.0537C7.43804 25.8163 9.23477 25.1775 10.835 24.1809C12.4352 23.1844 13.8011 21.8537 14.839 20.2801C15.877 18.7064 16.5624 16.9269 16.8485 15.0636C17.1346 13.2003 17.0145 11.2972 16.4964 9.48465C15.9784 7.67209 15.0746 5.99295 13.8471 4.56226C12.6195 3.13158 11.0972 1.98317 9.38438 1.19571C7.67158 0.408263 5.8088 0.000381029 3.92366 1.63391e-05Z'
              fill='#455174'
              fillOpacity='0.8'
            />
          </svg>
        )
      : setSvg(
          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.47727 24.6682L5.4 26.5909L7.85455 24.15L5.91818 22.2136M15 6.81818C10.4864 6.81818 6.81818 10.4864 6.81818 15C6.81818 19.5136 10.4864 23.1818 15 23.1818C19.5136 23.1818 23.1818 19.5136 23.1818 15C23.1818 10.4727 19.5136 6.81818 15 6.81818ZM25.9091 16.3636H30V13.6364H25.9091M22.1455 24.15L24.6 26.5909L26.5227 24.6682L24.0818 22.2136M26.5227 5.45455L24.6 3.54545L22.1455 5.98636L24.0818 7.92273M16.3636 0H13.6364V4.09091H16.3636M7.85455 5.98636L5.4 3.54545L3.47727 5.45455L5.91818 7.92273L7.85455 5.98636ZM0 16.3636H4.09091V13.6364H0M16.3636 25.9091H13.6364V30H16.3636'
              fill='#DFDFDF'
            />
          </svg>
        );
  };
  const toggletheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'ligth' : 'dark'));
    changesvg();
  };

  return (
    <>
      <Header toggletheme={toggletheme} theme={theme} svg={svg} />
      <Section1 theme={theme} />
      <div className={theme}></div>
    </>
  );
}

export default App;
