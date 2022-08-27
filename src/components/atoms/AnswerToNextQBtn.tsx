import { createTypeReferenceDirectiveResolutionCache } from "typescript";
type questionIdManage={
    ToNextQuestion:Function;
    ChangeDisplayAnswer:Function;
    ChangeDisplayNextBtn:Function;
}
{/*回答->次の問題へ　遷移するボタン */}
export const AnswerToNextQuestionButton=(props:questionIdManage)=>{
    
    const onclickOpenAnswer=()=>{
        //console.log("changeQuestionId！！");
        props.ToNextQuestion();
        props.ChangeDisplayAnswer();
        props.ChangeDisplayNextBtn();
    }
    return(
        <button className="bg-slate-500 rounded-lg mt-3 p-3 text-white ml-5 hover:bg-teal-500" onClick={onclickOpenAnswer}>次の問題へ</button>
    )
};