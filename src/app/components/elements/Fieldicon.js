import React from 'react';

const Icon = (props) => {
  let
  {
    inputIcon
  } = props;
  return ( 
    <React.Fragment>
      <span className="icon is-small is-left">
        <i className={inputIcon}></i>
      </span>
    </React.Fragment>
   );
}
 
export default Icon;