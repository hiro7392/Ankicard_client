import axios from "axios";
import { useEffect, useState } from "react";
import { sampleQuestions } from "../../data/sampleQuestionAndAnswer";
import { MiniQuestionCard } from "../molecules/MiniQuestionCard";
import {localURLPrivateGetCards,URL} from "../../api/client";
import { question } from "../../util/typeDefinition"

export const QuestionCardsTable=()=>{
    //  ユーザのカード情報を取得して10件まで表示する
    const [userCreatedCards,setUserCreatedCards]=useState<question[]>([]);

    const client = axios.create({
        baseURL: localURLPrivateGetCards,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    });
    const numsPercols:number=3;
    


    useEffect(()=>{
        //  ここでapiを読んでカードを取得する
        client.get(``)
        .then((res)=>{
            console.log(res);
            setUserCreatedCards(res.data);
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

                        {
                        userCreatedCards.map((quesiton,index)=>{
                            
                            const colEnd=numsPercols-1;
                            let now;
                            switch (index%numsPercols) {
                                case 0:
                                    now=(
                                        <tr>
                                        <td key={index}>
                                        <MiniQuestionCard answerText={quesiton.AnswerText} 
                                        questionText={quesiton.QuestionText} css={css} tag=
                                        {quesiton.tag}/>
                                        </td>
                                    )
                                    console.log(now);
                                    break;
                                case colEnd:
                                    now=(
                                        <td key={index}>
                                            <MiniQuestionCard answerText={quesiton.AnswerText} 
                                            questionText={quesiton.QuestionText} css={css} tag={quesiton.tag}/>
                                        </td>
                                        </tr>
                                    )
                                    break;
                                default:
                                    now=(
                                        <td key={index}>
                                        <MiniQuestionCard answerText={quesiton.AnswerText} 
                                        questionText={quesiton.QuestionText} css={css} tag=
                                        {quesiton.tag}/>
                                        </td>
                                    )
                            }
                            return now;
                        }
                        
                        )
                        }
                    
                    </tbody>
                </table>
            }
        </>
    );
}