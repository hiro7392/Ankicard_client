type questionTextProps={
    text:string;
}
export const QuestionCardText=(props:questionTextProps)=>{

    const text=props.text

    return(
        <>
            <h2 className="bg-slate-100 pt-40 py-60 px-20 text-3xl">{text}</h2>
        </>
    )
}