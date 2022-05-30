import { createTypeReferenceDirectiveResolutionCache } from "typescript";
type questionIdManage={
    nowQuestionId:number;
    changeQuestionId:Function;
}
{/*回答->次の問題へ　遷移するボタン */}
export const QuestionCardButton=(props:questionIdManage)=>{
    
    const onclickOpenAnswer=()=>{
        console.log("changeQuestionId！！");
        props.changeQuestionId(props.nowQuestionId);
        console.log(props.nowQuestionId);
    }
    return(
        <button className="bg-teal-500 rounded-lg mt-3 p-3 text-white" onClick={onclickOpenAnswer}>次の問題へ</button>
    )
};