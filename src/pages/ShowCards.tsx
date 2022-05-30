import { useEffect, useState } from "react";
import { sampleProblems } from "../data/sampleQuestionAndAnswer";
import { QuestionCard } from "../organism/QuestionCard";
import { Header } from "../templates/Header";
import { question } from "../util/typeDefinition";

export const ShowCards=()=>{
    const questions,setQuestions=useState([]);
    useEffect(()=>{
        setQuestions(sampleProblems);
    },[]);
    
    return(
        <>
            <Header/>
            <QuestionCard/>
        </>
    );
};