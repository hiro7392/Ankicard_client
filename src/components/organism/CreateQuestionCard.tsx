import { SubmitHandler, useForm } from "react-hook-form";
import client from "../../api/client";
import {SpeechApi} from "../atoms/SpeechApi"

type CreateCardInputs={
    questionText:string;
    answerText:string;
    //tag:string;
}
export const CreateQuestionCard=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm<CreateCardInputs>();

    //入力した新規カードを送信
    const onSubmit:SubmitHandler<CreateCardInputs>=(data)=>{
        client.post(`?questionText=${data.questionText}&answerText=${data.answerText}`)
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
                <label className="h-52 mt-8 mx-10 bg-slate-100 rounded">
                    <p className="text-left pl-3  py-2 text-slate-100 bg-slate-600"> 問題文</p>
                    <input type="text" className="h-40 w-full bg-slate-100" 
                    /* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */
                    placeholder="問題を入力してください" {...register('questionText',{required:true})}/>
                </label>
                {errors.questionText && (
                <span className="text-red-500 text-lg">問題を入力してください</span>
                )}
                <SpeechApi/>
                
                <label className="h-52 mx-10 bg-slate-100 rounded">
                    <p className="text-left pl-3 py-2 text-slate-100 bg-teal-600">解答</p>
                    <input type="text" className="h-40 w-full bg-slate-100" 
                    placeholder="解答を入力してください" {...register('answerText',{required:true})}/>
                </label>
                {/* データ検証に失敗するとerrorsが返され、登録した名前で取り出せる */}
                {errors.answerText && (
                <span className="text-red-400 text-lg">解答を入力してください</span>
                )}
                <SpeechApi/>

                
                
                <input className="bg-teal-400 py-2 w-48 mb-4 mx-auto text-4xl rounded-lg text-white hover:bg-teal-300" type="submit"/>
                {/*
                <button className="bg-blue-600 py-5 w-60 mx-auto text-4xl rounded-lg text-white hover:bg-blue-400">作成する</button>
                */}

            </form>
        </>
    )
}