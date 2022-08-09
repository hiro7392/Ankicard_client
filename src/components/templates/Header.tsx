import { Link, useLocation, useNavigate } from "react-router-dom"
import {LogoutIcon} from '@heroicons/react/outline'
import { useEffect, useState } from "react"
import { useDispatch, useGlobalLoginState } from "../../context/StateProvider"
import Modal from "../organism/Modal"

export const Header=()=>{

    const { isLogin } = useGlobalLoginState('loginState')
    const [userName, setUserName ] = useState<string | null>('')    //
    const navigate = useNavigate()
    const [modalOn, setModalOn] = useState<boolean>(false)
    const location = useLocation()

    //  ログアウト用のモーダルを開く
    const modal = () => {
        setModalOn((prevState) => (prevState = true))
    }
    const dispatch=useDispatch();
    //  グローバルなisLoginをfalseにする
    const changeLoginStateTrue=()=>{
        dispatch({ 
            type: 'setLogin',
            payload: {
                serviceName:"Socrates Card",
                isLogin: true
            },
        })
    }
    useEffect(() => {
        if(localStorage.getItem('token')!==null){
            changeLoginStateTrue()
        }
        if (!isLogin)navigate('/login')
        else{
            setUserName(localStorage.getItem('userName'))
        }
    }, [isLogin,navigate])


    return(
        <>
        <header className="flex item-center pl-8 h-14 bg-slate-700 w-screen">
                {/* <nav className="bg-teal-500 w-screen"> */}
                <nav className="bg-slate-700 w-screen">
                    <div className="flex justify-between my-3">
                        <div className="flex items-left">
                            <span className="font-semibold text-xl tracking-tight text-white">
                                
                            </span>
                            {/*ホーム画面へ戻る */}
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" 
                                to="/"
                            >
                                ホーム
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                                
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" 
                                to="/cards"
                            >
                                学習する
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" 
                                to="/create"
                            >
                                カード作成
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" 
                                to="/usercards"
                            >
                                カード一覧
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" 
                                to="/progress"
                            >
                                進捗
                            </Link>
                        </div>
                        <div className="flex items-left">
                            <div className="flex items-left text-right text-gray-200 hover:bg-gray-300 hover:text-gray-700 rounded px-2 py-1 mr-2 border-solid border-blue-100">
                            {/*ユーザアイコン*/}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h- w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                                <Link
                                    className="" 
                                    to="/userinfo"
                                >
                                    {userName}
                                </Link>
                            </div>
                            <button className="">
                                <LogoutIcon 
                                className="h-8 w-10 text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-1 mr-3 rounded"
                                aria-hidden="true"
                                onClick={()=>{
                                    modal()
                                }}
                                />
                            </button>
                            
                        </div>
                        </div>
                </nav>
        </header>
        {modalOn ? <Modal setModalOn={setModalOn} /> : null}
        </>
    )
}