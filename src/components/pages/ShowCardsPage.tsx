import { QuestionCardsTable } from "../organism/QuestionCardsTable";
import { Header } from "../templates/Header";

//  ユーザが作成したカードを確認する画面
export const ShowCardsPage=()=>{

    //とりあえず全てのカードを表示
    return(
        
        <>
            <Header/>
            <QuestionCardsTable/>
        </>
    );
}