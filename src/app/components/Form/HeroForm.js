import React from 'react';
import Fieldinput from './formComponents/Fieldinput';
import Select from './formPseudoElems/Select';
import Label from './formPseudoElems/Label';
import Button from '../elements/Button';
import Logo from '../logo';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

const HeroForm = (props) => {

  let
  {
    formFieldSet,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    updateFormName,
    updateFormLast,
    updateFormPhone,
    updateFormEmail
  } = props;

  const validateForm = () => {

    if (nameVal && lastVal && phoneVal && mailVal) {

      return ('is-outlined is-info is-radiusless is-large is-fullwidth has-text-white');

    } else {

      return ('is-static is-outlined is-dark is-radiusless is-large is-fullwidth has-text-dark');

    }
  }

  let optionsTime = [
    '',
    '9:00 am - 12:00 pm',
    '12:00 pm - 3:00 pm',
    '3:00 pm - 6:00 pm'
  ]
  let optionsVisit = [
    '',
    'January - April',
    'May - August',
    'September - December'
  ]
  return (
    <React.Fragment>
    <div className="mform">
      <div className="header"><h1>Become a checker today!</h1></div>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=626a961a7c5c37bc6daae9f82&amp;id=0239fd4541"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="columns">
            <div className="column">
              <div className="mc-field-group">
                <Fieldinput
                  Type='text'
                  Name='FNAME'
                  _Id='mce-FNAME'
                  Placeholder='Please enter your first name'
                  inputIcon={nameVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.nameValue || ''}
                  formHandler={e => updateFormName(e)}
                >
                  First Name
                </Fieldinput>
                <Fieldinput
                  Type='text'
                  Name='LNAME'
                  _Id='mce-LNAME'
                  Placeholder='Please enter your last name'
                  inputIcon={lastVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.lastValue || ''}
                  formHandler={e => updateFormLast(e)}
                >
                  Last Name
                </Fieldinput>
              </div>
            </div>
            <div className="column">
              <div className="mc-field-group">
                <Fieldinput
                  Type='tel'
                  Name='PHONE'
                  _Id='mce-PHONE'
                  Placeholder='123 456 7890'
                  inputIcon={phoneVal ? ('fas fa-mobile-alt') : ('fas fa-mobile')}
                  Value={formFieldSet.phoneValue || ''}
                  formHandler={e => updateFormPhone(e)}
                >
                  Phone number
              </Fieldinput>
                <Fieldinput
                  Type='email'
                  Name='EMAIL'
                  _Id='mce-EMAIL'
                  Placeholder='mail@mailme.com'
                  inputIcon={mailVal ? ('far fa-envelope') : ('far fa-envelope-open')}
                  Value={formFieldSet.emailValue || ''}
                  formHandler={e => updateFormEmail(e)}
                >
                  e-mail
              </Fieldinput>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
            </div>
          </div>
          <div className="columns" id='dropdown'>
            <div className="column is-flex">
              <div className="mc-field-group" id="selects">
                <Label>What is the best time to contact you?:</Label>
                <Select
                  Options={optionsTime}
                  Name='TIME'
                  _Id='mce-TIME'
                >
                </Select>
                <Label>When are you visiting Mexico</Label>
                <Select
                  Options={optionsVisit}
                  Name='DATEVISIT'
                  _Id='mce-DATEVISIT'
                >
                </Select>
              </div>
            </div>
          </div>
          <Button
            addClass={validateForm()}
            Type='submit'
            Value='Subscribe'
            _Id='mc-embedded-subscribe'
          >
            <p className='has-text-shadow'>Begin your experience</p>
          </Button>
        </form>
      </div>
      <div className="container">
        <div className="contact">
          <a href="tel:+19841305531"><h6>333-333-3333</h6></a>
          <div className="container">
            <Logo
              clsColor1="#c47200"
              clsColor2="#fff"
              clsColor3="#000"
            />
          </div>
          <a href="mailto:sales@todaygetaway.com" target="_blank" rel="noopener noreferrer"><h6>sales@todaygetaway.com</h6></a>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ actions }) => {
  const {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet }
    = actions
  return {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet
  }
}

export default connect(mapStateToProps, actions)(HeroForm)