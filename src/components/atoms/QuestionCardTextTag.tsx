type questionTextProps={
    text:string;
    css:string;
    tag:string
}
export const QuestionCardText=(props:questionTextProps)=>{

    const {text,css,tag}=props


    return(
        <>
            <div className={css}>
                
                    <h2>{text}</h2>
            </div>
        </>
    )
}