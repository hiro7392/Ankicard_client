import axios from "axios";
import { useEffect, useState } from "react";
import { sampleQuestionsCols } from "../../data/sampleQuestionAndAnswer";
import { MiniQuestionCard } from "../molecules/MiniQCard";
import {localURLPrivateGetCards} from "../../api/client";
import { question } from "../../util/typeDefinition"

const numsPercols:number=3;
const client = axios.create({
    baseURL: localURLPrivateGetCards,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
});


export const QuestionCardsTable=()=>{
    //  ユーザのカード情報を取得して10件まで表示する
    const [colsCards,setColsCards]=useState<question[][]>(sampleQuestionsCols);  //行ごとに保存

    useEffect(()=>{
        //  call apt api to get user created cards
        client.get(``)
        .then((res)=>{
            setColsCards([]);   //set empty
            // 1行にnumsPercols個ずつ並べて表示する
            for(let i=0;i<res.data.length;i+=numsPercols){
                let temp:question[]=[];
                for(let j=i;j<i+numsPercols;j++){
                    temp.push(res.data[j])
                }
                setColsCards((prev)=>[...prev,temp])
            }
            //console.log("colsCard ",colsCards);
        }).catch((res)=>{
            alert('エラーが発生しました');
        })
    },[]);

    const css:string="bg-slate-300 w-80 mx-10 mt-8 p-5 text-xl leading-10 rounded";
    return(
        <>
            {<table className="m-auto">
                <tbody>
                    {colsCards.map((col,i)=>{
                        return(
                            <tr key={i}>
                                { col.map((quesiton:question,index)=>{
                                    if(quesiton===undefined){
                                        return(<td key={index+numsPercols*i}></td>);
                                    }else{
                                        return(
                                            <td key={index+numsPercols*i}>
                                                <MiniQuestionCard 
                                                    answerText={quesiton.AnswerText} 
                                                    questionText={quesiton.QuestionText} css={css}
                                                    tag={quesiton.TagName!=null ? quesiton.TagName:"-----"}
                                                />
                                            </td>);
                                    }
                                })}
                            </tr>
                        );})
                    }
                </tbody>
            </table>}
        </>
    );
}