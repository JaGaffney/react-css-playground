import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../src/components/layout/Home';
import Mondrian from '../src/components/layout/Mondrian';
import Monopoly from '../src/components/layout/Monopoly';
import Roklama from '../src/components/layout/Roklama';
import './App.css';

function App() {


  return (
    <Router>
      <div className="App">
          <div className="wrapper">

            <Switch>
              <Route exact path="/" component={Home} />

              <section className="monopoly">
                <Route exact path="/mondrian" component={Mondrian} />
                <Route exact path="/monpoly" component={Monopoly} />
                <Route exact path="/roklama" component={Roklama} />
              </section>
            </Switch>

          <div className="bar-break"></div>

          </div>
      </div>
    </Router>
  );
}

export default App;
