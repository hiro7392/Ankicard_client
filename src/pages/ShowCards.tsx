import { useEffect, useState } from "react";
import { sampleQuestions } from "../data/sampleQuestionAndAnswer";
import { QuestionCard } from "../organism/QuestionCard";
import { Header } from "../templates/Header";
import { question } from "../util/typeDefinition";

export const ShowCards=()=>{
    //取得した問題たち
    const [questions,setQuestions]=useState(sampleQuestions);
    
    //現在表示する問題のID
    const [displayingQuestionId,setDisplayQuestionId]=useState(1);
    
    
    return(
        <>
            <Header/>
            <QuestionCard/>
        </>
    );
};