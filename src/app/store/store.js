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
    content:    <p> Are you looking for a great adventure? <br/>
                We have the right places for you, enjoy yourself in <br/>
                Los Cabos, Loreto, Cancun or Puerto Vallarta.
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
    content:    <p> Eat great food, have amazing experiences, <br/>
                take great pictures. <br/>
                Allow yourself to be amazed by a sincere place <br/>
                and become a checker.
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
    content:    <p> Come and meet Mexico where spontaneity is everywhere. <br/>
                Have a wild night out, take a look to a great view at the parachute <br/>
                or take a long hike.
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