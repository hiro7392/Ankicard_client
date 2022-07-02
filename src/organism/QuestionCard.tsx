import { useEffect, useState } from "react";
import { AnswerToNextQuestionButton } from "../atoms/AnswerToNextQuestionButton";
import { QuestionToAnswerButton} from "../atoms/QuestionToAnswerButton";
import { QuestionCardText } from "../atoms/QuestionCardText";
import { question } from "../util/typeDefinition";

type QuestionProps={
    Question:question;
    ToNextQuestion:Function;
};
export const QuestionCard=(props:QuestionProps)=>{

    //
    const [questionText,setQuestionText]=useState("");
    useEffect(()=>{
        //console.log("render question text");
        setQuestionText(props.Question.QuestionText);
        setDisplayAnswer(false);
    },[props.Question.id]);

    
    
    //displayAnswer=trueで答えを表示
    const [displayAnswer,setDisplayAnswer]=useState(false);
    const onclickOpenAnswer=()=>{
        setDisplayAnswer(!displayAnswer);
        //console.log(displayAnswer?"答えを表示します":"答えを隠します");
    }

    return ( 
        <div className="mt-20 w-1/2 h-full mx-auto">
            <h1 className="max-h-60 bg-lime-300 text-3xl py-2">{displayAnswer?"答え":"問題"}</h1>
            {/*問題の本文*/}
            <QuestionCardText 
            text={displayAnswer?
                props.Question.AnswerText
                :props.Question.QuestionText}
            css="bg-slate-100 h-96 px-20 text-3xl flex items-center mb-10 leading-10"
            />
            {/*問題文->回答へ　遷移するボタン */}
            <QuestionToAnswerButton changeQuestionState={onclickOpenAnswer}
            buttonText={displayAnswer? "問題を見る":"答えを見る"}
            />

            {displayAnswer &&
                /*回答->次の問題へ　遷移するボタン */
                <AnswerToNextQuestionButton ToNextQuestion={props.ToNextQuestion} />
            }
        </div>
    );
};

