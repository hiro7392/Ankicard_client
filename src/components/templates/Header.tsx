import { Link, useLocation, useNavigate } from "react-router-dom"
import {LogoutIcon} from '@heroicons/react/outline'
import { useEffect, useState } from "react"
import { useGlobalLoginState } from "../../context/StateProvider"
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

    useEffect(() => {
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
                    <div className="flex justify-between">
                        <div className="my-3">
                            <span className="font-semibold text-xl tracking-tight text-white">
                                
                            </span>
                            {/*ホーム画面へ戻る */}
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" 
                                to="/"
                            >
                                ホーム
                            </Link>
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
                            <Link
                                className="text-right text-gray-200 hover:bg-gray-300 hover:text-gray-700 my-auto px-2 py-1 rounded mr-2" 
                                to="/userinfo"
                            >
                                {userName}
                            </Link>
                            <button className="my-3">
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