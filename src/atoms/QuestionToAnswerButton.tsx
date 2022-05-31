import { createTypeReferenceDirectiveResolutionCache } from "typescript";

type questionStateManage={
    nowQuestionId:number;
    changeQuestionState:Function;
    buttonText?:string;
}
{/*問題文->回答へ　遷移するボタン */}
export const QuestionToAnswerButton=(props:questionStateManage)=>{
    
    const onclickOpenAnswer=()=>{
        console.log("changeQuestion State！！");
        props.changeQuestionState();
    }
    return(
        <button className="bg-rose-500 rounded-lg mt-3 p-3 text-white" 
            onClick={onclickOpenAnswer}
        >
            {props.buttonText}
        </button>
    )
};