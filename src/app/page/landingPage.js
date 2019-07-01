import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Logo from '../components/logo';
import store from '../store/store';
import Form from '../components/form/Form';
const Main = React.lazy(() => import ( "../landing-page/main" ));
const Path = React.lazy(() => import ( "../components/routes/path" ));  

const LandingPage = (props) => {

  const [toggleForm, setForm] = useState({ arrow: false})

  const formSlider = () => {
    let toggle = toggleForm;
    toggle.arrow = !toggle.arrow
    setForm({
      arrow: toggle.arrow
    })
  }

  return ( 
    <React.Suspense fallback={
      <div id="loading">
        <Logo
          clsColor1='#c47200'
          clsColor2='#000'
          clsColor3='#fff'
        />
      </div>
    }>
      <div className="landing-page">      
        <Route path="/" exact component={Main} />
        {
          store.map((item, i) => 
            <Route 
              path={`/${item.route}`} 
              key={i}
              render={
                () => 
                  <Path
                    title={item.route}
                    titleIcon={item.titleIcon}
                    content={item.content}
                    opt1={item.opt1}
                    opt2={item.opt2}
                    toggleHandler={formSlider}
                  />
              } />
          )
        }    
        <Form
          toggleVal={toggleForm.arrow}
          toggleHandler={formSlider}
        />  
      </div>     
    </React.Suspense>
  );
}

export default LandingPage;



