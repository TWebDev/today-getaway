import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactGa from 'react-ga';
import LandingPage from './page/landingPage';

ReactGa.initialize('UA-142110236-3')
ReactGa.pageview(window.location.pathname + window.location.search)

function App() {
    return ( 
      <Router>
        <LandingPage/>
      </Router>
    );
}

export default App;
