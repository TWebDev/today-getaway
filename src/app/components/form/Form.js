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
      case "name":
          var name;                
              formFields.name = e.target.value;
              formFields.name = formFields.name.replace(/ /g,'');
              formFields.name.length ? name= true : name = false;
              formFilled.name = name

          setForm({
            formFields, formFilled
          })

          break;

      case "last":
          var last;
              formFields.last = e.target.value;
              formFields.last = formFields.last.replace(/ /g,'');
              formFields.last.length ? last= true : last = false;
              formFilled.last = last

          setForm({
            formFields, formFilled
          })
        break;

        case "phone":
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
        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />     
        <div id="mc_embed_signup">
          <form action="https://gmail.us20.list-manage.com/subscribe/post?u=626a961a7c5c37bc6daae9f82&amp;id=0239fd4541" 
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" 
            target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">First Name </label>
                  <input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">Last Name </label>
                  <input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
                </div>
                <div class="mc-field-group size1of2">
                  <label for="mce-MMERGE6">Phone Number  <span class="asterisk">*</span>
                </label>
                  <input type="text" name="MMERGE6" class="required" value="" id="mce-MMERGE6"/>
                </div>
                <div class="mc-field-group">
                  <label for="mce-MMERGE3">What is the best time to call you?  <span class="asterisk">*</span></label>
                  <select name="MMERGE3" class="required" id="mce-MMERGE3">
                    <option value=""></option>
                    <option value="9:00 am - 12:00 pm">9:00 am - 12:00 pm</option>
                    <option value="12:00 pm - 3:00 pm">12:00 pm - 3:00 pm</option>
                    <option value="3:00 pm - 6:00 pm">3:00 pm - 6:00 pm</option>              
                  </select>
                </div>
              <div class="mc-field-group">
                <label for="mce-MMERGE4">When are you coming to Mexico?  <span class="asterisk">*</span></label>
                <select name="MMERGE4" class="required" id="mce-MMERGE4">
                  <option value=""></option>
                  <option value="January - April">January - April</option>
                  <option value="May - August">May - August</option>
                  <option value="September - December">September - December</option>
                </select>
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_626a961a7c5c37bc6daae9f82_0239fd4541" tabindex="-1" value=""/></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
            </div>
          </form>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
        <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='MMERGE6';ftypes[6]='phone';fnames[3]='MMERGE3';ftypes[3]='dropdown';fnames[4]='MMERGE4';ftypes[4]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
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