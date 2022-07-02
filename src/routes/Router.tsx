import { Route, Routes } from "react-router-dom";
import { CreateCard } from "../pages/CreateCardPage";
import { Home } from "../pages/HomePage";
import { Progress } from "../pages/ProgressPage";
import { ShowCards } from "../pages/LearningCardPage";

export const Router=()=>{
    return(

        <Routes>
            {/*タイトル画面 */}
            <Route path="/" element={<Home/>}/>
            {/*学習画面 */}
            <Route path="/cards" element={<ShowCards/>}/>
            {/*カード新規作成 */}
            <Route path="/create" element={<CreateCard/>}/>
            {/*進捗状況を見る */}
            <Route path="/progress" element={<Progress/>}/>


        </Routes>
    );
};