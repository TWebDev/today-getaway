import React from 'react';

const Select = (props) => {
  let 
  {
    Options,
    Name,
  } = props;
  return (
    <React.Fragment>
      <div className="select">
        <select className='has-text-grey' name={Name} id={`mce-${Name}`}>
          {Options.map((item, i) => 
            <option key={i} value={item}>{item}</option>  
          )}
        </select>
      </div>
    </React.Fragment>
  )
}

export default Select;