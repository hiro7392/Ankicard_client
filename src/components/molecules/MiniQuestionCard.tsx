import { useEffect, useState } from "react";
import { createTypeReferenceDirectiveResolutionCache } from "typescript";
import { QuestionCardText } from "../atoms/QuestionCardTextTag";
import { Tag } from "../atoms/Tag";
type MiniQuestionCardProp={
    answerText:string;
    questionText:string;
    css:string;
    tag:string;
}

export const MiniQuestionCard=(props:MiniQuestionCardProp)=>{
    
    const {answerText,questionText,css,tag}=props;
    const [displayQuestionText,setDisplayQuestionText]=useState(true)
    
    const changeTextStateFalse=()=>{
        setDisplayQuestionText(false);
    }
    const changeTextStateTrue=()=>{
        setDisplayQuestionText(true);
    }
    const tagDiv= tag==="" ?<Tag tagName={tag}/>:null;  //タグがない場合はnullを返す
    return(
        <>  
            {/*<QuestionCardText text={text} css={css} tag={tag}/>*/}
            <div className={css}>
                <div className="bg-slate-200 h-72 min-h-min pb-10 rounded">
                    <div className="flex items-start border-2 border-b-slate-400">
                        <p className="flex-1 text-teal-600 hover:bg-white cursor-pointer" onClick={changeTextStateTrue}>問題</p>
                        <p className="flex-1 text-teal-600 hover:bg-white hover cursor-pointer" onClick={changeTextStateFalse}>解答</p>
                    </div>
                    <div className="hover:bg-slate-100">
                    {displayQuestionText?
                    <h2 className="h-48 flex items-center text-center border-none mx-4 ">{questionText}</h2>:
                    <h2 className="h-48 flex text-sm items-center hover:bg-slate-100 text-center mx-3">{answerText}</h2>
                    }
                     {tagDiv}
                    </div>
                </div>
            </div>
        </>
    );
}