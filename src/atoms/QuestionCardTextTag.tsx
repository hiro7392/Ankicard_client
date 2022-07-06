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
                <div className="bg-slate-200 h-72 pb-10">
                    <div className="flex items-start border-2 border-b-slate-400">
                        <p className="flex-1 text-teal-600 hover:bg-white">問題 </p>
                        <p className="flex-1 text-teal-600 hover:bg-white hover">解答</p>
                    </div>
                    <h2>{text}</h2>
                    <p className="bottom-0 left-0 text-sm text-white bg-teal-500 rounded-lg">{tag}</p>
                </div>
            </div>
        </>
    )
}