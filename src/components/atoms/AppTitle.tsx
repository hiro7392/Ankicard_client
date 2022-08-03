import { BookOpenIcon } from "@heroicons/react/outline";
import { useGlobalLoginState } from "../../context/StateProvider";

export const AppTitle=()=>{
    const {serviceName}=useGlobalLoginState('loginState');
    return(
        <>
            <h1 className="font-mono text-6xl text-slate-700 mt-20">
            {serviceName}<br/>
            </h1>
            <BookOpenIcon className="h-1/4 w-1/4 m-auto text-slate-700"/>
        </>
    );
}