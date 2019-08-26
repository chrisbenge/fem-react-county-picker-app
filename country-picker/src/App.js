import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../src/Home/Home';
import CountryDetails from '../src/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/country/:name" component={CountryDetails} />
    </Router> 
  );
}

export default App;
