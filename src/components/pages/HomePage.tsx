import { Link } from "react-router-dom"
import { AppTitle } from "../atoms/AppTitle"
import {Header} from "../templates/Header"
export const HomePage=()=>{
    return(
        <>
        <Header/>
        <div className="flex bg-slate-100 shadow-md rounded-lg w-1/2  mx-auto px-8 pt-6 pb-24 mb-20 mt-24 flex-col font-mono">
            <AppTitle/>
        </div>
    
        <Link
            className="text-xl my-8 py-4 px-4  bg-teal-500 hover:bg-teal-700 text-white font-bold rounded"

            to="/cards"
        >
            学習を始める
        </Link>
        </>
    )
}