import {
  UPDATE_FORM_NAME,
  UPDATE_FORM_LAST,
  UPDATE_FORM_PHONE,
  UPDATE_FORM_EMAIL,
} from './actionTypes'

export const updateFormName = (event) => {
  return {
      type: UPDATE_FORM_NAME,
      payload: event
  }
}
export const updateFormLast = (event) => {
  return {
      type: UPDATE_FORM_LAST,
      payload: event
  }
}
export const updateFormPhone = (event) => {
  return {
      type: UPDATE_FORM_PHONE,
      payload: event
  }
}
export const updateFormEmail = (event) => {
  return {
      type: UPDATE_FORM_EMAIL,
      payload: event
  }
}