import React from 'react';
import Logo from '../components/logo';

const Menu = () => {

  const h1 = {
    color: "white"
  }

  return ( 
    <React.Fragment>
      <div className="Menu">
        <div className="container">
          <section className="logo">
            <Logo
              clsColor1='#c47200'
              clsColor2='#fff'
              clsColor3='#fff' />
          </section>
          <h1 style={h1}>Start your vacation bucket list!</h1>
        </div>
        <div className="menu">
          <section className="icon">
            a
          </section>
          <section className="icon">
            a
          </section>
          <section className="icon">
            a
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Menu;