import { useState } from "react";
import question from "../../types/Question";
import { Tag } from "../atoms/Tag";
import { ToDetailBtn } from "../atoms/ToDetailBtn";

type MiniQuestionCardProp={
    question:question;
    css:string;
    onClickAbout: (id:number)=>void;
    heightAll:string;
    questionTextSize:string;
    answerTextSize:string;
}


export const MiniQuestionCard=(props:MiniQuestionCardProp)=>{
    
    const [displayQuestionText,setDisplayQuestionText]=useState(true)
    
    const changeTextStateFalse=()=>{
        setDisplayQuestionText(false);
    }
    const changeTextStateTrue=()=>{
        setDisplayQuestionText(true);
    }
    const tagDiv= (props.question.TagName !=="") ?<Tag TagName={props.question.TagName}/>:null;  //タグがない場合はnullを返す

    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
    setIsOpen(true);
    }
   
    function closeModal() {
    setIsOpen(false);
    }
    
    return(
        <>  
            {/*<QuestionCardText text={text} css={css} tag={tag}/>*/}
            <div className={props.css}>
                <div className={"bg-white min-h-min pb-10 rounded "+props.heightAll}>
                    <div className="flex items-start border-b-2 border-b-slate-400 mx-1 text-center">
                        <p 
                            className="flex-1 text-teal-600 hover:bg-slate-200 cursor-pointer" 
                            onClick={changeTextStateTrue}>
                            問題
                        </p>
                        <p 
                            className="flex-1 text-teal-600 hover:bg-slate-200 hover cursor-pointer" 
                            onClick={changeTextStateFalse}>
                            解答
                        </p>
                    </div>
                    <div className="text-center">
                        {displayQuestionText?
                            <h2 className={"flex items-center border-none mx-6 "+props.questionTextSize}>
                                {props.question.QuestionText}
                            </h2>
                            :<h2 className={"flex items-center  mx-6 mx-auto "+props.answerTextSize}>
                                {props.question.AnswerText}
                            </h2>
                        }
                    </div>
                        <div className="flex items-start border-t-2 border-t-slate-400 mx-1">
                            {tagDiv}
                            <ToDetailBtn Path="/" Message="詳細へ" onClick={()=>props.onClickAbout(props.question.id)} id={props.question.id}/>
                        </div>
                    
                </div>
            </div>
        </>
    );
}