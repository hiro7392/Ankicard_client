import axios from "axios";
import { localURLPrivateUpdateCards } from "../../api/client";

type ReviewBtnProp={
    questionId:number;
    setNextQBtnOpen:Function;
}
//  回答を表示した際に,問題の難しさをフィードバックするボタン
export const ReviewBtn = (props:ReviewBtnProp) => {

    const BaseCss:string="rounded-lg text-xl w-56 m-1 py-3 text-gray-100 hover:text-gray-200 transition-colors ";
    
    // それぞれのボタンは異なるCSSを適用する
    const easyCss:string="bg-blue-500 hover:bg-blue-800";
    const normalCss:string="bg-green-500 hover:bg-green-800";
    const difficultCss:string="bg-yellow-500 hover:bg-yellow-800";
    const hard:string="bg-red-500 hover:bg-red-800";

    const upLevel:number[]=[4,3,2,1];
    
    const client = axios.create({
        baseURL: localURLPrivateUpdateCards,
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
    });
    const updateCardLevel = async(addLevel:number) => {
        await client.put(`${props.questionId}?level=${addLevel}`)
        .then((res)=>{
            alert("回答を送信しました");
            props.setNextQBtnOpen();
        }).catch((res)=>{
            alert("カードレベルの更新でエラーが発生しました");
        })
    }
    return(
        <>

            <div className="flex-item mx-auto mb-2 bg-slate-100 w-4/6 rounded">
                    <button className={BaseCss+easyCss}         onClick={()=>updateCardLevel(upLevel[0])}>楽勝</button>
                    <button className={BaseCss+normalCss}       onClick={()=>updateCardLevel(upLevel[1])}>普通</button>
                
                    <button className={BaseCss+difficultCss}    onClick={()=>updateCardLevel(upLevel[2])}>難しい</button>
                    <button className={BaseCss+hard}            onClick={()=>updateCardLevel(upLevel[3])}>無理</button>
            </div>
        </>
    );
}