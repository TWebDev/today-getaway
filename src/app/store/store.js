import React from 'react';
import { Link } from 'react-router-dom';
import Glass from '../components/icons/glass';
import Camera from '../components/icons/camera';
import Landmark from '../components/icons/landmark';

const h4 = {
  color: "white",
  textAlign: "center",
  margin: "0"
}

const store = [
  {
    route:      'search',
    titleIcon:  <Glass/>,
    content:    <p> Lorem ipsum dolor sit amet <br/>
                    consectetur adipiscing elit mollis, <br/>
                    semper scelerisque litora non hac.
                </p>,
    opt1:       <Link to="/visit">
                  <section className="icon">
                    <Landmark/>
                    <h4 style={h4}>Visit</h4>
                  </section>
                </Link>,
    opt2:       <Link to="/enjoy">
                  <section className="icon">
                    <Camera/>
                    <h4 style={h4}>Enjoy</h4>
                  </section>
                </Link>
  },
  {
    route:      'enjoy',
    titleIcon:  <Camera/>,
    content:    <p> Lorem ipsum dolor sit amet <br/>
                    consectetur adipiscing elit mollis, <br/>
                    semper scelerisque litora non hac.
                </p>,
    opt1:       <Link to="/visit">
                  <section className="icon">
                    <Landmark/>
                    <h4 style={h4}>Visit</h4>
                  </section>
                </Link>,
    opt2:       <Link to="/search">
                  <section className="icon">
                    <Glass/>
                    <h4 style={h4}>Search</h4>
                  </section>
                </Link>
  }, 
  { 
    route:      'visit',
    titleIcon:  <Landmark/>,
    content:    <p> Lorem ipsum dolor sit amet <br/>
                    consectetur adipiscing elit mollis, <br/>
                    semper scelerisque litora non hac.
                </p>,
    opt1:       <Link to="/search">
                  <section className="icon">
                    <Glass/>
                    <h4 style={h4}>Search</h4>
                  </section>
                </Link>,
    opt2:       <Link to="/enjoy">
                  <section className="icon">
                    <Camera/>
                    <h4 style={h4}>Enjoy</h4>
                  </section>
                </Link>
  }
]

export default store