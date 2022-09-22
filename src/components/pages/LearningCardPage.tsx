import axios from "axios";
import {useEffect, useState } from "react";
import { isBuffer } from "util";
import { localURLPrivateGetCards } from "../../api/client";
import { sampleQuestions } from "../../data/sampleQuestionAndAnswer";
import { question } from "../../util/typeDefinition";
import  MemoLizedQCardLearning from "../organism/LearningQCard";
import { Header } from "../templates/Header";

const client=axios.create({
    baseURL:localURLPrivateGetCards,
    headers:{'Authorization':'Bearer '+localStorage.getItem('token')}
});

export const LearningCardPage=()=>{
    const [questions,setQuestions]=useState<question[]>([]);
     //  画面を表示する際にユーザが作成したカード情報を取得
    useEffect(()=>{
        const questionSet=async()=>{
            const result=await getCards();
            console.log("result ",result);
        };
        questionSet();
    },[]);

    // ユーザが作成したカード情報を取得
    const getCards= async ()=>{
        await client.get(``)
        .then((res)=>{
            let temp:question[]=[];
            for(let i=0;i<res.data.length;i++){
                temp.push(res.data[i]);
            }
            setQuestions(temp);
            console.log("questions ",questions);
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
            {
            questions[0]===undefined
                ?<MemoLizedQCardLearning 
                    Question={sampleQuestions[questionIndex%sampleQuestions.length]} 
                    ToNextQuestion={ChangeQuestionIdToNext}
                />
                :<MemoLizedQCardLearning 
                    Question={questions[questionIndex%questions.length]} 
                    ToNextQuestion={ChangeQuestionIdToNext}
                /> 
            }

        </>
    );
};