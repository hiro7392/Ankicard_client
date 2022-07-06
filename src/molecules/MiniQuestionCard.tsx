import { useEffect, useState } from "react";
import { QuestionCardText } from "../atoms/QuestionCardTextTag";
type MiniQuestionCardProp={
    text:string;
    css:string;
    tag:string;
}

export const MiniQuestionCard=(props:MiniQuestionCardProp)=>{
    
    const {text,css,tag}=props;
    return(
        <>  
            <QuestionCardText text={text} css={css} tag={tag}/>
            
        </>
    );
}