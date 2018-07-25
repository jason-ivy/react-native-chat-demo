import { createActions, createReducer } from 'reduxsauce';
import {Toast} from 'native-base';

import { apis, api } from '../apis';

const INIT_STATE = {
  phone: null,
  userToken: null
}

export const { Types, Creators } = createActions({
  login: ['token'],
  logout: null
}, {});

export default createReducer(INIT_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout
});

function login(state, action) {
  return {...state, token: action.token};
}

function logout() {
  return {...state, token: null};
}




function sendCode() {
  return (dispatch, getState) => {
    // const phone = getState().auth.phone;
    // debugger;
    api.get(apis.sendCode, {
      phone: '18321776136'
    }).then(res => {
      console.log(res);
        if(res && res.data) {
          console.log(res.data);
          if(res.data.res == 1) {
            alert('验证码已发送');
          } else if(res.data.res == 303) {
            alert('请不要频繁发送');
          }          
        }
      }, err => {
        Toast.show({
          text: '网络问题，请稍后重试'
        });
        console.log(err);
      });

    // setTimeout(() => {
    //   dispatch(Creators.login());
    // }, 2000);
  }
}