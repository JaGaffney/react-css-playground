import React from 'react';

import Header from '../src/components/layout/Header';
// import Header from '../src/components/layout/Header2';
import Mondrian from '../src/components/layout/Mondrian';
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


        </div>
    </div>
  );
}

export default App;
