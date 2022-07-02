import { Link } from "react-router-dom"
import {LogoutIcon} from '@heroicons/react/outline'

export const Header=()=>{
    return(
        <header className="flex item-center pl-8 h-14 bg-lime-600 w-screen">
                <nav className="bg-lime-600 w-screen">
                    <div className="flex justify-between">
                        <div className="my-3">
                            <span className="font-semibold text-xl tracking-tight text-white">
                                
                            </span>
                            {/*ホーム画面へ戻る */}
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded" 
                                to="/"
                            >
                                Home
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded" 
                                to="/cards"
                            >
                                学習する
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded" 
                                to="/create"
                            >
                                カード作成
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded" 
                                to="/usercards"
                            >
                                カード一覧
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded" 
                                to="/progress"
                            >
                                進捗
                            </Link>
                            <Link 
                                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded" 
                                to="/userinfo"
                            >
                                ユーザー情報
                            </Link>
                        </div>
                            <div className="my-3">
                                <LogoutIcon 
                                className="h-8 w-10 text-gray-200 hover:bg-gray-700 px-1 mr-5 rounded"
                                aria-hidden="true"
                                /** onClick={()=>{
                                    modal()
                                }}*/
                                />
                            </div>
                        </div>
                </nav>
        </header>
    )
}