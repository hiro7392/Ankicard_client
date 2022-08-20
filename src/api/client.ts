import axios from "axios";

export const URL="http://localhost:8080/card/2";

export const localURLPrivateGetCards="http://localhost:8080/private/card/2";

export const localURLPrivateGetTags="http://localhost:8080/private/tag/";
// axios の細かい config を設定できる
const client = axios.create({
    baseURL: URL,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
  });
  
  // axios 本体でなくこちらを利用するようにする
export default client;