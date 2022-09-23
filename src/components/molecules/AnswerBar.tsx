type AnswerBarProps={
    onclick:()=>void;
}
export const AnswerBar = (prop:AnswerBarProps) => {
    const IconCSS="text-sm text-white my-auto m-2 h-10 hover:bg-slate-100 hover:text-teal-600 cursor-pointer rounded";
    
    return(
        <div className="flex items-start max-h-60 bg-teal-600  py-2 relative">
            <button className="absolute" onClick={prop.onclick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={IconCSS}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
            </button>
            <h2 className="flex items-center m-auto text-3xl text-white">
                        答え
            </h2>
        </div>
    );
}