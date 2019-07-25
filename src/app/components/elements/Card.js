import React from 'react';

const Card = (props) => {
  let
  {
    Ratio,
    Source,
    Alt,
    children
  } = props;
  return ( 
    <React.Fragment>
      <div className='card has-shadow-3 has-text-90s has-background-primary'>
        <div className="card-image">
          <figure className={`image ${Ratio}`}>
            <img src={Source} alt={Alt}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Card;