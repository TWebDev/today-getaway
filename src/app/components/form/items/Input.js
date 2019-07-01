import React from 'react';

const Input = (props) => {
  let 
  {
    Type,
    Name,
    Placeholder,
    inputHandler,
    Value,
  } = props;

  return (
    <React.Fragment>
      <input 
        type={Type}
        name={Name}
        value={Value}
        id={`mce-${Name}`} 
        placeholder={Placeholder}
        onChange={inputHandler}
      >
      </input>
    </React.Fragment>
  )
}

export default Input;