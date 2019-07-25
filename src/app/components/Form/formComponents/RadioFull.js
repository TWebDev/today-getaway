import React from 'react';
import Radio from '../formPseudoElems/Radio';

const RadioFull = () => {
  let options = [
    {
      _Id: '4598',
      Value: 'Yes',
      Name: 'group1'
    },
    {
      _Id: '9821',
      Value: 'No',
      Name: 'group1'
    },
    {
      _Id: '7105',
      Value: 'Maybe',
      Name: 'group1'
    }
  ]

  return (
    <React.Fragment>
      {options.map((item) => 
        <Radio
          _Id={item._Id}
          Value={item.Value}
          Name={item.Name}
        >
          {item.Value}
        </Radio>
      )}
    </diReact.Fragmentv>
  )
}

export default RadioFull;