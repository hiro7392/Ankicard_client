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
    // 非同期でユーザが作成したカード情報を取得
    const getCards= async ()=>{
        await client.get(``)
        .then((res)=>{
            setQuestions(res.data);
            console.log(res.data);
        }).catch((res)=>{
            alert('エラーが発生しました');
        })
    }
    useEffect(()=>{
        console.log("カードを取得");
        console.log(questions[0]);
        setQuestions([]);  //毎回空にする
        getCards();
    },[]);

    //現在表示する問題のID
    const [questionIndex,setQuestionIndex]=useState<number>(0);
    const ChangeQuestionIdToNext=()=>{
        setQuestionIndex(questionIndex+1);
    };

    
    return(
        <>
            <Header/>
            <QuestionCardLearning Question={sampleQuestions[questionIndex%sampleQuestions.length]} ToNextQuestion={ChangeQuestionIdToNext}/>
        </>
    );
};