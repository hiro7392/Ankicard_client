import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import client, { localURLPrivateCreateCards, localURLPrivateGetTags } from "../../api/client";
import { tag } from "../../util/typeDefinition";

import {SpeechApi} from "../atoms/VoiceInput"

type CreateCardInputs={
    questionText:string;
    answerText:string;
    tagId:number;
}
export const CreateQCard=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm<CreateCardInputs>();
    const [tags,setTags]=useState<tag[]>([]);

    // api
    const client = axios.create({
        baseURL: localURLPrivateGetTags,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    });
    // ユーザが作成したタグを取得
    useEffect(()=>{
        client.get('')
        .then(res=>{
            setTags(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    const clientCreateCard = axios.create({
        baseURL: localURLPrivateCreateCards,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    });
    //入力した新規カードを送信
    const onSubmit:SubmitHandler<CreateCardInputs>=(data)=>{
        clientCreateCard.post(`0?questionText=${data.questionText}&answerText=${data.answerText}&tagId=${data.tagId}`)
        .catch((res)=>{
            console.log(res);
            console.log("Error");
        }).then((res)=>{
            console.log(res);
        })
    };
    
    

    //console.log('watch',watch('questionText'));  //watchは引数に渡した名前の入力値を監視する
    // const submitNewCard=()=>{
        
    // }
    return(
        <>
            
            <form className="flex flex-col w-1/2 mt-8 mx-auto bg-slate-300 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                {/* 問題文 */}
                <label className="h-42 mt-8 mx-10 bg-slate-100 rounded-lg">
                    <p className="text-left pl-3  py-2 text-slate-100 bg-slate-600"> 問題文</p>
                    <input type="text" className="h-32 w-full bg-slate-100 rounded-lg" 
                    /* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */
                    placeholder="問題を入力してください" {...register('questionText',{required:true})}/>
                </label>
                
                <SpeechApi/>
                {errors.questionText && (
                <span className="text-red-500 text-lg">問題を入力してください</span>
                )}
                
                {/* 解答分 */}
                <label className="h-42 mx-10 bg-slate-100 rounded-lg">
                    <p className="text-left pl-3 py-2 text-slate-100 bg-teal-600">解答</p>
                    <input type="text" className="h-36 w-full bg-slate-100 rounded-lg" 
                    placeholder="解答を入力してください" {...register('answerText',{required:true})}/>
                </label>
                <select className="w-60 ml-10 mt-2 h-6 text-white align-left bg-slate-500 rounded-lg"
                placeholder="解答を入力してください" {...register('tagId',{required:true})}>
                    {/*タグの選択肢 */}
                    <option value="" className="m-2">--タグを選んでください--</option>
                        {tags.map((tag,index)=>{
                            return(
                                <option key={index} value={tag.TagId}>{tag.TagName}</option>
                            );})
                        }
                </select>
                <SpeechApi/>
                {/* データ検証に失敗するとerrorsが返され、登録した名前で取り出せる */}
                {errors.answerText && (
                <span className="text-red-400 text-lg">解答を入力してください</span>
                )}
                
                <input className="bg-slate-600 py-3 w-64 mb-4 mt-4 mx-auto text-4xl rounded-lg text-white hover:bg-teal-500" type="submit" value="作成する"/>

            </form>
        </>
    )
}