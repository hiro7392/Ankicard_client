import axios from "axios";

const URL="http://localhost:8080/card";

// axios の細かい config を設定できる
const client = axios.create({
    baseURL: URL
    //headers: {'X-Custom-Header': 'foobar'}
  });
  
  // axios 本体でなくこちらを利用するようにする
  export default client;