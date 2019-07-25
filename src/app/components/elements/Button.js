import React from 'react';

const Button = (props) => {
  let
  {
    addClass,
    Type,
    Value,
    Name,
    _Id,
    children
  } = props;

  return ( 
    <React.Fragment>
      <button 
        className={`button ${addClass}`} 
        type={Type} 
        value={Value} 
        name={Name} 
        id={_Id}
      >
        {children}
      </button>
    </React.Fragment>
   );
}
 
export default Button;