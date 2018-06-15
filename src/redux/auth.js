import { createActions, createReducer } from 'reduxsauce';

const INIT_STATE = {
  vCode: 1,
  phone: null,
  token: null
}

const { Types, Creators } = createActions({
  sendSMS: ['phone'],
  login: ['phone', 'vCode'],
  logout: null
}, {});

export default createReducer(INIT_STATE, {
  // [Types.SEND_SMS]: (state, action) => {console.log('sendSMS'); return {...state, vCode: 'sms'}},
  [Types.LOGIN]: () => {console.log('login')},
  [Types.LOGOUT]: () => {console.log('logout')}
});

