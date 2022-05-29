import { useEffect, useState } from "react";

export const QuestionCard=()=>{

    const [questionText,setQuestionText]=useState("")

    useEffect(()=>{
        setQuestionText("サンプル問題 TCP/IPプロトコルにおける3wayhandshakeとは?");
    },[]);

    return ( 
        <div className="mt-20 w-1/2 h-1/2 m-auto bg-cyan-100">
            <h1 className="">問題</h1>
            <h2>{questionText}</h2>
            
        </div>
    );
};

