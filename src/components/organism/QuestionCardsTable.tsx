import axios from "axios";
import { useEffect, useState } from "react";
import { sampleQuestions } from "../../data/sampleQuestionAndAnswer";
import { MiniQuestionCard } from "../molecules/MiniQuestionCard";
import {localURLPrivateGetCards,URL} from "../../api/client";

export const QuestionCardsTable=()=>{
    //  ユーザのカード情報を取得して10件まで表示する
    const [userCreatedCards,setUserCreatedCards]=useState(sampleQuestions);

    const client = axios.create({
        baseURL:URL,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    });

    useEffect(()=>{
        //  ここでapiを読んでカードを取得する
        client.get(``)
        .then((res)=>{
            console.log(res);
        }).catch((res)=>{
            alert('エラーが発生しました');
        })
    },[]);

    const css:string="bg-slate-300 w-80 mx-10 mt-20 p-5 text-xl mb-10 leading-10 rounded";
    return(
        <>
            {
                <table className="m-auto">
                    
                    <tbody>
                    <tr>
                        {userCreatedCards.map((quesiton)=>{
                            return(
                            <td>
                                <MiniQuestionCard answerText={quesiton.AnswerText} questionText={quesiton.QuestionText} css={css} tag={quesiton.tag}/>
                            </td>);
                        }
                        )}
                    </tr>
                    <tr>
                        {userCreatedCards.map((quesiton)=>{
                            return(
                            <td>
                                <MiniQuestionCard answerText={quesiton.AnswerText} questionText={quesiton.QuestionText} css={css} tag={quesiton.tag}/>
                            </td>);
                        }
                        )}
                    </tr>
                    </tbody>
                   
                </table>
            }
        </>
    );
}