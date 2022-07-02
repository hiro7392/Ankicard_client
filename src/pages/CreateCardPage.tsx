import { CreateQuestionCard } from "../organism/CreateQuestionCard";
import { Header } from "../templates/Header";

export const CreateCardPage=()=>{

    return(
        <>
            <Header/>
            <h1 className="text-white">カードを新規作成します</h1>
            <CreateQuestionCard/>
        </>
    );
};