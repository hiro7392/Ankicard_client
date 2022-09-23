import { Link } from "react-router-dom";

type ToDetailBtnProps = {
    Message: string;
    Path:string;
}

export const ToDetailBtn = (props: ToDetailBtnProps) => {

    return (
        <>
            <a 
                className="flex text-sm ml-auto mr-2 p-2 m-1 text-left text-sky-600 m-1 p-2 hover:bg-slate-300 rounded-lg cursor-pointer"
            >
            {props.Message}
            </a>
        </>
    );
}