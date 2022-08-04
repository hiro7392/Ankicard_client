import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useGlobalLoginState } from '../../context/StateProvider'
import { AppTitle } from '../atoms/AppTitle'

const localhostAuth:string='http://localhost:8080/auth';
const validatePassword = (password:string) => {
  
  const passwordLengthMin=4;
  const passwordLengthMax=32;
  // 正規表現でメールアドレスをチェックする
  if (password.length<passwordLengthMin || password.length>passwordLengthMax) {
    console.log(`${passwordLengthMin}文字以上${passwordLengthMax}文字以下のパスワードを入力してください`);
    return false;
  }
  return true;
}
const validateEmail=(email:string)=>{
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!emailRegExp.test(email)){
    console.log('メールアドレスを入力してください')
    return false
  }
  return true
}
const Login = () => {
  const { isLogin} = useGlobalLoginState('loginState')


  const navigate=useNavigate()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  // 認証処理
  const sendAuthRequest = ()=>{
    console.log(email,password)
    // validation
    const validateResult=validateEmail(email)&&validatePassword(password)
    if(!validateResult)return false
    //  axiosでapiにリクエストを送る
    axios.post(localhostAuth+`?email=${email}&password=${password}`)
    .then(res=>{
      console.log(res);
      localStorage.setItem('token',res.data);
    })
    .catch(err=>{
      console.log(err);
      return false
    })
    console.log("認証処理完了 token:"+localStorage.getItem('token'))
    return true
  }
  //  ログインボタンの処理
  const login=()=>{
      const result=sendAuthRequest()
       // ログイン処理が成功すると、ログイン状態をtrueにする 
      if(result){
        changeLoginState()
        navigate('/login')
      }else{
        alert('ログインに失敗しました')
      }
  }
    const dispatch = useDispatch();
    const  changeLoginState=()=>{
    // グローバルステイトの更新を行わせる指示をdispatchの引数とする
        dispatch({
            type: 'setLogin',
            payload: {
                serviceName:"ログインしています",
                isLogin: !isLogin
            },
        })
    }
  
  useEffect(()=>{
    console.log("ログイン状態",isLogin)
      //現在のログイン状況を確認
    if(isLogin){
        console.log("ログイン済み",isLogin)
        setEmail('')
        setPassword('')
        navigate('/')
    }
  },[isLogin,navigate])


  return (
    <div>

      <div className="flex bg-white shadow-md rounded-lg w-1/2  mx-auto px-8 pt-6 pb-8 mb-4 mt-10 flex-col font-mono">
        <AppTitle/>
        <h1 className="bg-white pt-6 pb-4 font-bold rounded text-xl">Login</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-grey-darker pt-2 text-sm font-bold mb-2"
          >
            email
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            autoFocus={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-grey-darker text-sm pt-2 font-bold mb-2"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            onClick={()=>{login()}}
          >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login