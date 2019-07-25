import React from 'react';
import Label from '../formPseudoElems/Label';
import Input from '../formPseudoElems/Input';
import Fieldicon from '../../elements/Fieldicon';

const Fieldinput = (props) => {
  let
  {
    Type,
    Name,
    _Id,
    Placeholder,
    Value,
    formHandler,
    inputIcon,
    children
  } = props;

  const Icon = <Fieldicon inputIcon={inputIcon}></Fieldicon>

  return ( 
    <React.Fragment>
      <div className="field">
        <Label
          _Id={_Id}
        >{children}</Label>
        <div className="control has-icons-left">
          <Input
            Type={Type}
            Name={Name}
            Placeholder={Placeholder}
            Value={Value}
            formHandler={formHandler}
            _Id={_Id}
          >
          </Input>
          {Icon}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Fieldinput;