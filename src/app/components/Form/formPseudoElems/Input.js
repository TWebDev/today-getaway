import React from 'react';

const Input = (props) => {
  let 
  {
    Type,
    Name,
    Placeholder,
    formHandler,
    Value,
  } = props;

  return (
    <React.Fragment>
      <input 
        className="input" 
        type={Type}
        name={Name}
        value={Value}
        id={`mce-${Name}`} 
        placeholder={Placeholder}
        onChange={formHandler}
      >
      </input>
    </React.Fragment>
  )
}

export default Input;