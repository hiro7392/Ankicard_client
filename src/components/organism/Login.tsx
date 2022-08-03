import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginReducer } from '../../context/reducer'
import { useDispatch, useGlobalLoginState } from '../../context/StateProvider'

const Login = () => {
  const { serviceName,isLogin} = useGlobalLoginState('loginState')
  //const {isLogin,setIsLogin}=useContext()
  const navigate=useNavigate()
  
  // 認証処理
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {}
  //ログインボタンの処理
  const login=()=>{
      const result=false
       //ログイン処理が成功すると、ログイン状態をtrueにする 
      if(false){
        setLogin()
        navigate('/login')
      }else{
        alert('ログインに失敗しました')
      }
  }
    const dispatch = useDispatch();
    const  setLogin=()=>{
    // グローバルステイトの更新を行わせる指示をdispatchの引数とする
        dispatch({
            type: 'setLogin',
            payload: {
                serviceName:"ログイン",
                isLogin: true
            },
        })
    }

  useEffect(()=>{
      //現在のログイン状況を確認
    if(isLogin){
        console.log("ログイン済み")
        navigate('/')
    }
  },[isLogin,navigate])


  return (
    <div>
      <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 flex-col font-mono">
        <h1 className="bg-white pt-10 pb-8 font-bold rounded text-3xl">
          {serviceName}!!
        </h1>
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
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            onClick={()=>login()}
          >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
