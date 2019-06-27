import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from './page/landingPage';

class App extends Component {
  state = {  }

  render() { 
    return ( 
      <Router>
        <LandingPage/>
      </Router>
    );
  }
}

export default App;
