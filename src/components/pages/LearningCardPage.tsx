import axios from "axios";
import {useEffect, useState } from "react";
import { isBuffer } from "util";
import { localURLPrivateGetCards } from "../../api/client";
import { sampleQuestions } from "../../data/sampleQuestionAndAnswer";
import { question } from "../../util/typeDefinition";
import { QuestionCardLearning } from "../organism/LearningQCard";
import { Header } from "../templates/Header";

const client=axios.create({
    baseURL:localURLPrivateGetCards,
    headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
});

export const LearningCardPage=()=>{
    //ユーザが作成したカード情報を取得
    const [questions,setQuestions]=useState<question[]>([]);
     //  画面を表示する際に一回だけ実行する
    useEffect(()=>{
        console.log("useEffect");
        const questionSet=async()=>{
            const result=await getCards();
            if(result===null)alert('エラーが発生しました learningCardPage');
            // console.log("カードを取得");
            // console.log("questions",questions);
        };
        questionSet();
        console.log("questions [0]=",questions[0]);
    },[]);

    // 非同期でユーザが作成したカード情報を取得
    const getCards= async ()=>{
        await client.get(``)
        .then((res)=>{
            let temp:question[]=[];
            for(let i=0;i<res.data.length;i++){
                temp.push(res.data[i]);
            }
            setQuestions(temp);
            // console.log(res);
            // console.log("set questions",questions);
            return questions
        }).catch((res)=>{
            alert('エラーが発生しました');
            return null
        })
    }

    //現在表示する問題のID
    const [questionIndex,setQuestionIndex]=useState<number>(0);
    const ChangeQuestionIdToNext=()=>{
        setQuestionIndex(questionIndex+1);
    };

    return(
        <>
            <Header/>
            {questions[0]===undefined?<QuestionCardLearning Question={sampleQuestions[questionIndex%sampleQuestions.length]} ToNextQuestion={ChangeQuestionIdToNext}/>
            :<QuestionCardLearning Question={questions[questionIndex%questions.length]} ToNextQuestion={ChangeQuestionIdToNext}/> }

        </>
    );
};