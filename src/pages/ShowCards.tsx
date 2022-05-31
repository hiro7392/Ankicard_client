import { useEffect, useState } from "react";
import { sampleQuestions } from "../data/sampleQuestionAndAnswer";
import { QuestionCard } from "../organism/QuestionCard";
import { Header } from "../templates/Header";
import { question } from "../util/typeDefinition";

export const ShowCards=()=>{
    //取得した問題たち  サーバができたらAPIを呼ぶようにする
    const [questions,setQuestions]=useState(sampleQuestions);
    
    //現在表示する問題のID
    const [questionId,setQuestionId]=useState(1);
    const ChangeQuestionIdToNext=()=>{
        setQuestionId(questionId+1);
        //console.log("in question card",questionId);
    };
    return(
        <>
            <Header/>
            <QuestionCard Question={questions[(questionId-1)%questions.length]} ToNextQuestion={ChangeQuestionIdToNext}/>
        </>
    );
};