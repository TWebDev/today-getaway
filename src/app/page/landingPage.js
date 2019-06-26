import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../landing-page/header';
import Main from '../landing-page/main';

const LandingPage = () => {
  return ( 
    <React.Fragment>
      <Header/>
      <Route path="/" exact component={Main} />
      
    </React.Fragment>
  );
}

export default LandingPage;