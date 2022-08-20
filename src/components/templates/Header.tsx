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
    const {serviceName}=useGlobalLoginState('loginState');
    const dispatch=useDispatch();

    //  グローバルなisLoginをfalseにする
    const changeLoginStateTrue=()=>{
        dispatch({ 
            type: 'setLogin',
            payload: {
                serviceName:serviceName,
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

    const IconCSS="text-sm my-auto m-2 h-8 ";
    const IconCSSOut="text-sm my-auto rounded text-slate-50 text-white hover:bg-gray-300 hover:text-gray-700";

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
                            <Link to="/" className={IconCSSOut}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={IconCSS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </Link>
                            {/*学習画面 */}
                            <Link to="/cards" className={IconCSSOut}>   
                                <svg xmlns="http://www.w3.org/2000/svg" className={IconCSS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </Link>
                            {/*新規作成画面 */}
                            <Link to="/cards" className={IconCSSOut}>   
                                <svg xmlns="http://www.w3.org/2000/svg" className={IconCSS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </Link>
                            {/*一覧画面へ */}
                            <Link to="/usercards" className={IconCSSOut}>   
                                <svg xmlns="http://www.w3.org/2000/svg" className={IconCSS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </Link>
                            {/* <Link 
                                className="text-sm text-gray-200 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded" 
                                to="/usercards"
                            >
                                カード一覧
                            </Link> */}
                           {/*一覧画面へ */}
                            <Link to="/usercards" className={IconCSSOut}>   
                                <svg xmlns="http://www.w3.org/2000/svg" className={IconCSS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
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