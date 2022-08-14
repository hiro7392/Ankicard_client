import axios from "axios";

export const URL="http://localhost:8080/card";

export const localURLPrivateGetCards="http://localhost:8080/private/card/1";

// axios の細かい config を設定できる
const client = axios.create({
    baseURL: URL,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
  });
  
  // axios 本体でなくこちらを利用するようにする
export default client;