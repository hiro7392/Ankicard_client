import { useEffect, useState } from "react";
import { QuestionCardButton } from "../atoms/QuestionCardButton";
import { QuestionCardText } from "../molecules/QuestionCardText";

export const QuestionCard=()=>{

    const [questionText,setQuestionText]=useState("")

    useEffect(()=>{
        setQuestionText("サンプル問題 TCP/IPプロトコルにおける 3way shand shakeとは?");
    },[]);

    return ( 
        <div className="mt-20 w-1/2 h-1/2 m-auto ">
            <h1 className="bg-lime-300 text-3xl py-2">問題</h1>
            <QuestionCardText text={questionText}/>
            <QuestionCardButton/>
        </div>
    );
};

