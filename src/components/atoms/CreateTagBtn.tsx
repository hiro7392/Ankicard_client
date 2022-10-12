import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { localURLPrivateCreateCards,  localURLPrivatePostTag } from "../../api/client";

type NewTagType={
    tagName:string;
}
export const CreateTagBtn=()=>{

    const clientCreateTag = axios.create({
        baseURL: localURLPrivatePostTag,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    });
    const {handleSubmit,formState:{errors}}=useForm<NewTagType>();
    //タグを新規作成
    const onSubmit:SubmitHandler<NewTagType>=(data)=>{
        clientCreateTag.post(`?tag_name=${data.tagName}`)
        .then((res)=>{
            alert("タグを作成しました");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <form className="flex items ml-2 h-6 rounded-lg " onSubmit={handleSubmit(onSubmit)}>
            <input type={"text"} className="rounded h-6 border-2 border-slate-300"/>
            <input type="submit" value="タグを作成" className="text-xs p-1 ml-1 rounded bg-slate-600 text-white hover:bg-teal-500 "/>
        </form>
    );
}