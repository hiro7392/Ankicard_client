type ReviewBtnProp={
    questionId:number;
}

export const ReviewBtn = (props:ReviewBtnProp) => {

    const BaseCss:string="rounded-lg mx-3 py-3 px-5 text-gray-100 hover:text-gray-200 ";
    const easyCss:string="bg-blue-500 hover:bg-blue-800";
    const normalCss:string="bg-green-500 hover:bg-green-800";
    const difficultCss:string="bg-yellow-500 hover:bg-yellow-800";
    const hard:string="bg-red-500 hover:bg-red-800";

    // カードの習熟レベルを更新する
    const updateCardLevel = (level:number) => {

    }
    return(
        <>

            <div className="flex-item mx-auto mb-16 bg-slate-100 p-3 w-4/6 rounded-lg">
                <button className={BaseCss+easyCss}>楽勝</button>
                <button className={BaseCss+normalCss}>普通</button>
                <button className={BaseCss+difficultCss}>難しい</button>
                <button className={BaseCss+hard}>無理</button>
            </div>
        </>
    );
}