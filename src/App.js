import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Demo from './Demo'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/demo" component={Demo} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;