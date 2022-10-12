import axios from "axios";

export const URL="http://localhost:8080/card/2";

export const localURLPrivateGetCards="http://localhost:8080/private/card/2";

export const localURLPrivatePostTag="http://localhost:8080/private/tag/";

export const localURLPrivateGetTags="http://localhost:8080/private/tag/";

// カード更新
export const localURLPrivateUpdateCards="http://localhost:8080/private/card/";

//  カード新規作成
export const localURLPrivateCreateCards="http://localhost:8080/card/";



export const localURLPrivateGetTagsByCard="http://localhost:8080/private/tag/card/";
// axios の細かい config を設定できる
const client = axios.create({
    baseURL: URL,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
  });
  
  // axios 本体でなくこちらを利用するようにする
export default client;