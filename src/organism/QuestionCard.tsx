import { useEffect, useState } from "react";
import { QuestionCardButton } from "../atoms/AnswerToNextQuestionButton";
import { QuestionToAnswerButton} from "../atoms/QuestionToAnswerButton";
import { QuestionCardText } from "../molecules/QuestionCardText";

export const QuestionCard=()=>{

    //
    const [questionText,setQuestionText]=useState("");
    useEffect(()=>{
        console.log("render question text");
        setQuestionText("サンプル問題 TCP/IPプロトコルにおける 3way shand shakeとは?");
    },[]);

    const [questionId,setQuestionId]=useState(1);
    const incrementQuestionId=()=>{
        setQuestionId(questionId+1);
        console.log("in question card",questionId);
    };
    //答えを見せるか
    //displayAnswer=trueで答えを表示
    const [displayAnswer,setDisplayAnswer]=useState(false);
    const onclickOpenAnswer=()=>{
        setDisplayAnswer(!displayAnswer);
        console.log(displayAnswer?"答えを表示します":"答えを隠します");
    }

    return ( 
        <div className="mt-20 w-1/2 h-1/2 m-auto ">
            <h1 className="bg-lime-300 text-3xl py-2">問題</h1>
            {/*問題の本文*/}
            <QuestionCardText 
            text={displayAnswer?"answer":questionText}
            />

            
            {displayAnswer?
                /*回答->次の問題へ　遷移するボタン */
                <QuestionCardButton nowQuestionId={questionId} 
                changeQuestionId={incrementQuestionId} 
                />:
                /*問題文->回答へ　遷移するボタン */
                <QuestionToAnswerButton nowQuestionId={questionId} 
                changeQuestionState={onclickOpenAnswer}
                />
            }
        </div>
    );
};

