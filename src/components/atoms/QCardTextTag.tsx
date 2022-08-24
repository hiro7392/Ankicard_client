type questionTextProps={
    text:string;
    css:string;
}
export const QuestionCardText=(props:questionTextProps)=>{

    const {text,css}=props


    return(
        <>
            <div className={css}>
                <h2>{text}</h2>
            </div>
        </>
    )
}