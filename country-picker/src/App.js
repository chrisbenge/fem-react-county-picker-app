import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';

import { Header } from '../src/Header/Header';
import Home from '../src/Home/Home';
import CountryDetails from '../src/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Header />
      <div className="appWrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:name" component={CountryDetails} />
      </div>
    </Router> 
  );
}

export default App;
