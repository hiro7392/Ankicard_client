type questionTextProps={
    text:string;
    css:string;
}
export const QuestionCardText=(props:questionTextProps)=>{

    const {text,css}=props


    return(
        <>
            <h2 className={css}>
                {text}
            </h2>
        </>
    )
}