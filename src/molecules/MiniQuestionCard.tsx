import { useEffect, useState } from "react";
import { QuestionCardText } from "../atoms/QuestionCardText";
type MiniQuestionCardProp={
    text:string;
    css:string;
}

export const MiniQuestionCard=(props:MiniQuestionCardProp)=>{
    
    const {text,css}=props;
    return(
        <>  

            <QuestionCardText text={"sample問題です"} css={css} />
        </>
    );
}