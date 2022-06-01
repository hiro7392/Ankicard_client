import { SubmitHandler, useForm } from "react-hook-form";

type CreateCardInputs={
    questionText:string;
    answerText:string;
    //tag:string;
}
export const CreateQuestionCard=()=>{
    const {register,handleSubmit,watch,formState:{errors}}=useForm<CreateCardInputs>();

    const onSubmit:SubmitHandler<CreateCardInputs>=(data)=>console.log('onSibmit',data);
    console.log('watch',watch('questionText'));  //watchは引数に渡した名前の入力値を監視する
    const submitNewCard=()=>{

    }
    return(
        <>
            
            <form className="flex flex-col w-1/2 mx-auto">
                <label className="h-60 mt-10">
                    <p className="text-left mb-3"> 問題文</p>
                    <input type="text" className=" h-40 w-full rounded-lg " 
                    placeholder="問題を入力してください" {...register('questionText')}/>
                </label>
                <label className="h-60">
                    <p className="text-left mb-3">解答</p>
                    <input type="text" className="mb-10 h-40 w-full rounded-lg" 
                    placeholder="解答を入力してください" {...register('answerText')}/>
                </label>
                <button className="bg-blue-600 py-5 w-60 mx-auto text-4xl rounded-lg text-white hover:bg-blue-400">作成する</button>

            </form>
        </>
    )
}