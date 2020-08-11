import React from 'react';
import './App.css';
import Nav from './Nav';
import weather from './weather';
import covid from './covid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
      {/*<Route path="/" component={Home}/> */}
          <Route path="/weather" component={weather} />
          <Route path="/covid" component={covid} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
