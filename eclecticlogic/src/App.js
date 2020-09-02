import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing.jsx"
import History from "./utils/History";
import './App.css';

function App() {
  return (
    <Router history={History}>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
