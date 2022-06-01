import { createTypeReferenceDirectiveResolutionCache } from "typescript";
type questionIdManage={
    ToNextQuestion:Function;
}
{/*回答->次の問題へ　遷移するボタン */}
export const AnswerToNextQuestionButton=(props:questionIdManage)=>{
    
    const onclickOpenAnswer=()=>{
        //console.log("changeQuestionId！！");
        props.ToNextQuestion();
    }
    return(
        <button className="bg-teal-500 rounded-lg mt-3 p-3 text-white ml-5 hover:bg-blue-600" onClick={onclickOpenAnswer}>次の問題へ</button>
    )
};