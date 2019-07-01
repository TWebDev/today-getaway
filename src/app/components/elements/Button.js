import React from 'react';

const Button = (props) => {
  let
  {
    children,
    clickHandler,
    disabled
  } = props;
  return ( 
    <React.Fragment>
      <button onClick={clickHandler} disabled={disabled}>
        {children}
      </button>
    </React.Fragment>
  );
}

export default Button;