import React from 'react';

const Radio = (props) => {
  let
  {
    _Id,
    Value,
    Name,
  } = props;

  return (
    <React.Fragment>
      <div className="control">
        <label className="radio" htmlFor={_Id}>
          <input 
            type='radio'
            value={Value}
            name={Name}
            id={_Id}
          />
          {Value}
        </label>
      </div>
    </React.Fragment>
  )
}

export default Radio;