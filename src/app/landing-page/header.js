import React from 'react';
import Logo from '../components/logo';
import Flecha from '../components/icons/flecha';

const Header = () => {
  return ( 
    <React.Fragment>
      <div className="Header">
        <div className="container">
          <section className="logo">
            <Logo
              clsColor1='#c47200'
              clsColor3='#fff' />
          </section>
          <span className="icon">
            <Flecha/>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;