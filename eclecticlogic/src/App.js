import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import About from "./components/About"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import History from "./utils/History";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faEnvelope, faKey);

function App() {
  return (
    <Router history={History}>
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
