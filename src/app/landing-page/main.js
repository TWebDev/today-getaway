import React from 'react';
import Logo from '../components/logo';
import Search from '../components/icons/search';
import Landmark from '../components/icons/landmark';
import Camera from '../components/icons/camera';

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
      tag:      <Search/>,
      children: 'Search'
    },
    {
      tag:      <Landmark/>,
      children: 'Visit'
    },
    {
      tag:      <Camera/>,
      children: 'Enjoy'
    }
  ]

  return ( 
    <React.Fragment>
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
                <section className="icon" key={index}>
                  {item.tag}
                  <h4 style={h4}>{item.children}</h4>
                </section>
              )
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;