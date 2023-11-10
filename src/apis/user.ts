import axios from 'axios';
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function logInAPI(data:{email:string; password: string}){
  return axios.post('/user/login',data).then((res: { data: any; })=>res.data)
}

export function loadMyInfoAPI() {
  return axios.get('/user').then((response) => response.data);
}

export function signupAPI(data: {email:string; nickname: string; password: string}) {
  return axios.post('/user', data).then((res)=>res.data)
}