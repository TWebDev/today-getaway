import React, { useState, useEffect } from 'react';
import Input from './items/Input';
import Select from './items/Select';
import Button from '../elements/Button';
import Flecha from '../icons/flecha';
import Logo from '../logo';

const Form = (props) => {
  let
  {
    toggleVal,
    toggleHandler,
  } = props;

  const [form, setForm] = useState({
    formFields: {
                  name:  '',
                  last:  '',
                  phone: '',
                  email: ''
                },
    formFilled: {
                  name:  false,
                  last:  false,
                  phone: false,
                  email: false
                }
  })

  useEffect(() => {
    setTimeout( toggleHandler, 3000 );
  },[])

  const updateForm = e => {
    let formFields = Object.assign({}, form.formFields);    
    let formFilled = Object.assign({}, form.formFilled);   
    e.target.name = e.target.name.toLowerCase();
    
    switch (e.target.name) {
      case "fname":
          var name;                
              formFields.name = e.target.value;
              formFields.name = formFields.name.replace(/ /g,'');
              formFields.name.length ? name= true : name = false;
              formFilled.name = name

          setForm({
            formFields, formFilled
          })

          break;

      case "lname":
          var last;
              formFields.last = e.target.value;
              formFields.last = formFields.last.replace(/ /g,'');
              formFields.last.length ? last= true : last = false;
              formFilled.last = last

          setForm({
            formFields, formFilled
          })
        break;

        case "mmerge6":
          var phone;
          var invalidChars = /\D+/gm;
              formFields.phone = e.target.value;
              formFields.phone = formFields.phone.replace(/ /g,'');
              formFields.phone.length ? phone = true : phone = false;    
          var str = formFields.phone;

          if (invalidChars.test(formFields.phone)) {
            str = str.replace(invalidChars, "");
            phone = false;
          }        
          if (str.length >= 10) {
                str = str.substring(0 , 10);      
                str = str.replace(/(\S{3})/g,"$1-");
                str = str.replace(/-$/,"");
            var lastFour = str.substr(str.length - 5);
                lastFour = lastFour.replace("-","");
                str = str.substring(0,8);
                str = str + lastFour;
          } else {
              phone = false;
          }
          formFields.phone = str;
          formFilled.phone = phone

        
          setForm({
            formFields, formFilled
          })
        break;

      case "email":
          var email;
          var mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              formFields.email = e.target.value;
              formFields.email = formFields.email.replace(/ /g,"");  
              mailRegex.test(formFields.email) ? email = true : email = false;
              formFilled.email = email;
              
          setForm({
            formFields, formFilled
          })
        break;

      default:        
        break;
    }
  }

  if( form.formFilled.name  &&
      form.formFilled.last  &&
      form.formFilled.phone &&
      form.formFilled.email === true) {
    var disabled = false;
    } else {
        disabled = true
    }

  return ( 
    <React.Fragment>
      <section className={toggleVal ? ("sidebar") : ("sidebar hidden")}>
        <div className="header">
          <Flecha
            toggleHandler={toggleHandler}
          />
          <h1>
            Become a checker today!
          </h1>     
        </div>     
        <div id="mc_embed_signup">
          <form 
            action="https://gmail.us20.list-manage.com/subscribe/post?u=626a961a7c5c37bc6daae9f82&amp;id=0239fd4541"  
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate>
            <div className="mc-field-group" id="email">
              <Input        
              Type="email"
              Name="EMAIL"
              Placeholder="email@mailme.com"
              inputHandler={e => updateForm(e)}
              Value={form.formFields.email}           
            ></Input>
            </div>  
            <div className="mc-field-group">
              <Input        
              Type="text"
              Name="FNAME"
              Placeholder="First Name"
              inputHandler={e => updateForm(e)}
              Value={form.formFields.name}      
              ></Input>
            </div>
            <div className="mc-field-group">
              <Input        
              Type="text"
              Name="LNAME"
              Placeholder="Last Name"
              inputHandler={e => updateForm(e)}
              Value={form.formFields.last}            
              ></Input>
            </div>
            <div className="mc-field-group">
              <Input        
              Type="tel"
              Name="MMERGE6"
              Placeholder="123-456-7890"
              inputHandler={e => updateForm(e)}  
              Value={form.formFields.phone}          
              ></Input>
            </div>  
            <div className="mc-field-group" id="selects">
              <Select
              Options={["","9:00 am - 12:00 pm","12:00 pm - 3:00 pm","3:00 pm - 6:00 pm"]}
              Name="MMERGE3"
              ></Select>
              <Select
              Options={["","January - April","May - August","September - December"]}
              Name="MMERGE4"
              ></Select>
            </div>                                    
            <Button
              Type="submit"
              Value="Subscribe"
              _Id="mc-embedded-subscribe"
              disabled={disabled}
            >
              Begin your experience
            </Button>          
          </form>
        </div>
        <div className="container">
          <Logo
            clsColor1="#c47200"
            clsColor2="#fff"
            clsColor3="#000"
          />
          <div className="contact">
            <a href="tel:+19841305531"><h6>333-333-3333</h6></a>
            <a href="mailto:sales@todaygetaway.com" target="_blank" rel="noopener noreferrer"><h6>sales@todaygetaway.com</h6></a>
          </div>
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default Form;