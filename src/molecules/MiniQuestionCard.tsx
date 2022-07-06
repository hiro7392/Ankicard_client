import { useEffect, useState } from "react";
import { QuestionCardText } from "../atoms/QuestionCardTextTag";
import { Tag } from "../atoms/Tag";
type MiniQuestionCardProp={
    text:string;
    css:string;
    tag:string;
}

export const MiniQuestionCard=(props:MiniQuestionCardProp)=>{
    
    const {text,css,tag}=props;
    return(
        <>  
            {/*<QuestionCardText text={text} css={css} tag={tag}/>*/}
            <div className={css}>
                <div className="bg-slate-200 h-72 pb-10">
                    <div className="flex items-start border-2 border-b-slate-400">
                        <p className="flex-1 text-teal-600 hover:bg-white">問題 </p>
                        <p className="flex-1 text-teal-600 hover:bg-white hover">解答</p>
                    </div>
                    <h2 className="h-48 flex items-center hover:bg-slate-100">{text}</h2>
                    <Tag tagName={tag}/>
                </div>
            </div>
        </>
    );
}