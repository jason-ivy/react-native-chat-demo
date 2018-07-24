import {create} from 'apisauce';

export const baseUrl = {
  client: 'http://120.77.216.85/dbshop/front',
};

export const api = create({
  baseURL: baseUrl.client,
  headers: {'token': 'token??'}
});

export const apis = {
  sendCode: '/user/user/sendCode',
}