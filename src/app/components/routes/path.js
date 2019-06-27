import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../logo';

const Path = (props) => {
  let
  {
    title,
    titleIcon,
    content,
    opt1,
    opt2
  } = props;
  
  useEffect(() => {
    var resolution = window.screen.width,
        slidingCard = document.getElementById("card"),
        showFooter = document.getElementById("footer"),
        bg = document.getElementById("route");
        bg.style.opacity = "1"
        showFooter.style.height = "10em"
    if (resolution === 768) {
      slidingCard.style.width = "80%";
    } else {
      slidingCard.style.width = "30%"
    } 
  });

  const h3 = {
    color: "white",
    textAlign: "center",
    display: 'inline-block',
    margin: '0 0 0 15px',
    fontWeight: '300'
  }

  return ( 
    <React.Fragment>
      <div className={`${title} Route`} id="route">
        <div className="wrapper">
          <Link to='/'>
            <Logo
              clsColor1='#c47200'
              clsColor2='#fff'
              clsColor3='#fff'
            />
          </Link>
        </div>
        <div className="card" id="card">
          {titleIcon}
          <h3 style={h3}>{title}</h3>
        </div>
        <div className="container">
          <section className="content">
            {content}
            <button>Book Now!</button>
          </section>
        </div>
        <div className="container" id="footer">
          <footer>
            {opt1}
            {opt2}
          </footer>
        </div>        
      </div>
    </React.Fragment>
  );
}

export default Path;