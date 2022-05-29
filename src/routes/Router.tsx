import { Route, Routes } from "react-router-dom";
import { CreateCard } from "../pages/CreateCard";
import { Home } from "../pages/Home";
import { Progress } from "../pages/Progress";
import { ShowCards } from "../pages/ShowCards";

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