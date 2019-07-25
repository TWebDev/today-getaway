import React from 'react';
import Checkbox from '../formPseudoElems/Checkbox';

const CheckboxFull = () => {

  let checkboxes = [
    {
      Type: 'checkbox',
      _Id: '1546',
      Value: '1',
      Name: 'Cun',
      children: 'Have you ever wished?'
    },
    {
      Type: 'checkbox',
      _Id: '5614',
      Value: '2',
      Name: 'PuV',
      children: 'Have you ever been?'
    },
    {
      Type: 'checkbox',
      _Id: '8941',
      Value: '4',
      Name: 'Cab',
      children: 'Have you ever had?'
    }
  ]

  return (
    <React.Fragment>
      {checkboxes.map((item) =>
        <Checkbox
          Type={item.Type}
          Value={item.Value}
          Name={item.Name}
          _Id={item._Id}
        >{item.children}</Checkbox>  
      )}
    </React.Fragment>
  )
}

export default CheckboxFull;