import { AppTitle } from "../atoms/AppTitle"
import {Header} from "../templates/Header"
export const HomePage=()=>{
    return(
        <>
        <Header/>
        <div className="flex bg-slate-100 shadow-md rounded-lg w-1/2  mx-auto px-8 pt-6 pb-24 mb-4 mt-24 flex-col font-mono">
            <AppTitle/>
        </div>

        </>
    )
}