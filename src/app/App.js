import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from './page/landingPage';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Router>
          <LandingPage/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
