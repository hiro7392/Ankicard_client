import { createTypeReferenceDirectiveResolutionCache } from "typescript";

type questionStateManage={
    changeQuestionState:Function;
    buttonText?:string;
}
{/*問題文->回答へ　遷移するボタン */}
export const QuestionToAnswerButton=(props:questionStateManage)=>{
    
    const onclickOpenAnswer=()=>{
        //console.log("changeQuestion State！！");
        props.changeQuestionState();
    }
    return(
        <button 
        className="bg-teal-400 hover:bg-teal-700 rounded-lg mt-3 p-3 text-gray-100  hover:text-gray-200 font-bold" 
            onClick={onclickOpenAnswer}
        >
            {props.buttonText}
        </button>
    )
};