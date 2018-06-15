import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import auth from '../auth';

const resettable = resettableReducer('RESET');

export default combineReducers({
  auth: resettable(auth)
});