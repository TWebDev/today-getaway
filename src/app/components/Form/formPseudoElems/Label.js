import React from 'react';

const Label = (props) => {
  let
  {
    _Id,
    children
  } = props;

  return (
    <React.Fragment>
      <label 
        htmlFor={_Id}
        className='label'
      >
        {children}
      </label>
    </React.Fragment>
  )
}

export default Label;