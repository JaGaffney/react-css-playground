import React from 'react';

import Header from '../src/components/layout/Header';
import Mondrian from '../src/components/layout/Mondrian';
import Monopoly from '../src/components/layout/Monopoly';
import Roklama from '../src/components/layout/Roklama';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="wrapper">
  
          <header>
            <Header />   
          </header>

          <div className="bar-break"></div>  

          <section className="mondrian">
            <Mondrian />
          </section>

          <div className="bar-break"></div>  

          <section className="monopoly">
            <Monopoly />
          </section>

          <div className="bar-break"></div>  

          <section className="monopoly">
            <Roklama />
          </section>

          <div className="bar-break"></div>  


        </div>
    </div>
  );
}

export default App;
