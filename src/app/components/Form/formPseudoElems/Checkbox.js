import React from 'react';

const Checkbox = (props) => {
  let 
  {
    _Id,
    Value,
    Name,
    children
  } = props;
  return (
    <React.Fragment>
      <label className={Type} htmlFor={_Id}>
        <input 
          type='checkbox'
          value={Value}
          name={Name}
        />
        {children}
      </label>
    </React.Fragment>
  )
}

export default Checkbox;