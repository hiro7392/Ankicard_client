import { Link } from "react-router-dom";

type ToDetailBtnProps = {
    Message: string;
    Path:string;
    onClick:(id:number)=>void
    id:number
}

export const ToDetailBtn = (props: ToDetailBtnProps) => {

    const css:string="flex text-sm ml-auto mr-2 p-2 m-1 text-left text-sky-600 m-1 p-2 hover:bg-slate-300 rounded-lg cursor-pointer";
    return (
        <>
            <button 
                className={css}
                onClick={()=>props.onClick(props.id)}
            >
            {props.Message}
            </button>
        </>
    );
}