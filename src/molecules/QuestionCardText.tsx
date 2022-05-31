type questionTextProps={
    text:string;
}
export const QuestionCardText=(props:questionTextProps)=>{

    const text=props.text

    return(
        <>
            <h2 className="bg-slate-100 h-96 px-20 text-3xl flex items-center mb-10 leading-10">
                {text}
            </h2>
        </>
    )
}