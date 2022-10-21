import { memo, useEffect, useState } from "react";
import { AnswerToNextQuestionButton } from "../atoms/AnswerToNextQBtn";
import { QuestionToAnswerButton} from "../atoms/QToAnswerBtn";
import { QuestionCardText } from "../atoms/QCardTextTag";
import { question } from "../../../types/question";
import { Tag } from "../atoms/Tag";
import { ReviewBtn } from "../molecules/ReviewBtn";
import { ToDetailBtn } from "../atoms/ToDetailBtn";
import { AnswerBar } from "../molecules/AnswerBar";

type QuestionProps={
    Question:question;
    ToNextQuestion:Function;
};
const QuestionCardLearning=(props:QuestionProps)=>{

    //displayAnswer=trueで答えを表示
    const [displayAnswer,setDisplayAnswer]=useState(false);

    // 難易度を答えた後で次の問題を表示するボタン
    const [displayNextQBtn,setDisplayNextQBtn]=useState(false);

    const onclickOpenAnswer=()=>{
        setDisplayAnswer(!displayAnswer);
    }
    const onclickOpenNextQBtn=()=>{
        setDisplayAnswer(false);
        setDisplayNextQBtn(false);
        props.ToNextQuestion();
    }

    const tagDiv= (props.Question.TagName!=="") 
            ?<Tag TagName={props.Question.TagName}/>
            :<Tag TagName="タグなし"/>;  //タグがない場合はタグなしを表示する

    return ( 
        <div className="mt-20 w-1/2 mx-auto">
            <div className="rounded-lg mb-10">
                {displayAnswer
                ?<AnswerBar onclick={onclickOpenAnswer}/>
                :<h1 className="max-h-60 bg-gray-700 text-3xl text-white py-2 z-0">問題</h1>
                }
                
                {/*問題の本文*/}
                <div className="bg-slate-50">
                    <QuestionCardText 
                    text={displayAnswer?
                        props.Question.AnswerText
                        :props.Question.QuestionText}
                    css={displayAnswer? 
                        "bg-slate-50 h-80 px-20 text-2xl flex items-center mb-2  leading-10"
                        :"bg-slate-50 h-80 px-20 text-3xl flex items-center mb-2 leading-10"}
                    />
                    {/* <Tag tagName={props.Question.tagName}/> */}
                    <div className="flex items-start border-t-4 border-slate-200 pt-4 mx-2">
                        {tagDiv}
                        <ToDetailBtn Path="/" Message={`学習レベル${props.Question.LearningLevel}`}/>
                    </div>
                    
                </div>
            </div>

            {
                /*回答->次の問題へ　遷移するボタン */
                displayAnswer?<ReviewBtn questionId={1} setNextQBtnOpen={onclickOpenNextQBtn}/>:null
            }

            {/*問題文->回答へ　遷移するボタン */}
            {displayAnswer
            ?null
            :<QuestionToAnswerButton 
            changeQuestionState={onclickOpenAnswer}
            buttonText="答えを見る"
            />}
            
            {displayNextQBtn &&
                /*回答->次の問題へ　遷移するボタン */
                <AnswerToNextQuestionButton ToNextQuestion={props.ToNextQuestion} 
                ChangeDisplayAnswer={onclickOpenAnswer}
                ChangeDisplayNextBtn={onclickOpenNextQBtn}/>
            }
        </div>
    );
};

const MemoLizedQCardLearning=memo(QuestionCardLearning);

export default MemoLizedQCardLearning;

