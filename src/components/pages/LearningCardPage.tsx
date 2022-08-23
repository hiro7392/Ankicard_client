import axios from "axios";
import {useEffect, useState } from "react";
import { localURLPrivateGetCards } from "../../api/client";
import { sampleQuestions } from "../../data/sampleQuestionAndAnswer";
import { question } from "../../util/typeDefinition";
import { QuestionCardLearning } from "../organism/QuestionCardLearning";
import { Header } from "../templates/Header";


export const LearningCardPage=()=>{
    //ユーザが作成したカード情報を取得
    const [questions,setQuestions]=useState<question[]>([]);
    
    const client=axios.create({
        baseURL:localURLPrivateGetCards,
        headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
    });
    useEffect(()=>{
        client.get(``)
        .then((res)=>{
            setQuestions([]);    //set empty
            setQuestions(res.data);
        }).catch((res)=>{
            alert('エラーが発生しました');
        })
    },[]);

    //現在表示する問題のID
    const [questionIndex,setQuestionIndex]=useState<number>(0);
    const ChangeQuestionIdToNext=()=>{
        setQuestionIndex(questionIndex+1);
    };

    
    return(
        <>
            <Header/>
            <QuestionCardLearning Question={questions[questionIndex%questions.length]} ToNextQuestion={ChangeQuestionIdToNext}/>
        </>
    );
};