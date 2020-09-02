import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import History from "./utils/History";
import './App.css';

function App() {
  return (
    <Router history={History}>
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
