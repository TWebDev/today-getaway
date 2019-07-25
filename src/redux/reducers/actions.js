import {
  UPDATE_FORM_NAME,
  UPDATE_FORM_LAST,
  UPDATE_FORM_PHONE,
  UPDATE_FORM_EMAIL
} from '../actions/actionTypes';

const INITIAL_STATE = {
  formFieldSet: {
      nameValue: '',
      lastValue: '',
      phoneValue: '',
      emailValue: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  let 
  {
    formFieldSet
  } = state;

  var form = Object.assign({}, formFieldSet);

    switch (action.type) {
      case UPDATE_FORM_NAME:
        
        let nameVal;

        form.nameValue = action.payload.target.value;

        form.nameValue.replace(/\s/g, '').length ? nameVal= true : nameVal = false;

        return {
          ...state, formFieldSet: form, nameVal
        }
        
      case UPDATE_FORM_LAST:
        let lastVal;

        form.lastValue = action.payload.target.value;

        form.lastValue.replace(/\s/g, '').length ? lastVal= true : lastVal = false;

        return {
            ...state, formFieldSet: form, lastVal
        }

      case UPDATE_FORM_PHONE:
        let phoneVal;

        var invalidChars = /\D+/gm;

        form.phoneValue = action.payload.target.value;

        form.phoneValue.replace(/\s/g, '').length ? phoneVal= true : phoneVal = false;

        if (invalidChars.test(form.phoneValue)) {
          form.phoneValue = form.phoneValue.replace(invalidChars, "");
          phoneVal = false;
        }

        if (form.phoneValue.length >= 10) {
          form.phoneValue = form.phoneValue.substring(0 , 10);
        } else {
          phoneVal = false;
        }

        return {
          ...state, formFieldSet: form, phoneVal
        }

      case UPDATE_FORM_EMAIL:
        let mailVal;
        var mailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        form.emailValue = action.payload.target.value;
        form.emailValue.replace(/\s/g, '').length ? mailVal= true : mailVal = false;

        mailRegex.test(form.emailValue) ? mailVal = true : mailVal = false;

        return {
          ...state, formFieldSet: form, mailVal
        }
    
      default:
        return state
  }
}