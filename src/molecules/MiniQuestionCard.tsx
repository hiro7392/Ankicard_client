import { useEffect, useState } from "react";
import { QuestionCardText } from "../atoms/QuestionCardText";

export const MiniQuestionCard=()=>{
    //  ユーザのカード情報を取得して10件まで表示する
    const [userCreatedCards,setUserCreatedCards]=useState([]);

    useEffect(()=>{
        //  ここでapiを読んでカードを取得する
    },[]);
    const css:string="bg-slate-100 h-96 px-20 text-3xl flex items-center mb-10 leading-10"
    return(
        <>  

            <QuestionCardText text={"sample問題です"} css={css} />
        </>
    );
}