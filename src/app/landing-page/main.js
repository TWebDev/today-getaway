import React from 'react';
import Header from './header';
import Logo from '../components/logo';
import Glass from '../components/icons/glass';
import Landmark from '../components/icons/landmark';
import Camera from '../components/icons/camera';
import { Link } from 'react-router-dom';

const Main = () => {

  const h1 = {
    color: "white"
  }

  const h4 = {
    color: "white",
    textAlign: "center"
  }

  var icons = [
    {
      tag:      <Glass/>,
      children: 'Search',
      route: '/search'
    },
    {
      tag:      <Landmark/>,
      children: 'Visit',
      route: '/visit'
    },
    {
      tag:      <Camera/>,
      children: 'Enjoy',
      route: '/enjoy'
    }
  ]

  return ( 
    <React.Fragment>
      <Header/>
      <div className="Main">
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
          <div className="item-container">
            {
              icons.map((item, index) => 
                <Link to={item.route} key={index}>
                  <section className="icon">
                    {item.tag}
                    <h4 style={h4}>{item.children}</h4>
                  </section>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;