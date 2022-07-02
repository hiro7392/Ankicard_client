import { Route, Routes } from "react-router-dom";
import { CreateCardPage } from "../pages/CreateCardPage";
import { HomePage } from "../pages/HomePage";
import { Progress } from "../pages/ProgressPage";
import { LearningCardPage } from "../pages/LearningCardPage";
import { ShowCardsPage } from "../pages/ShowCardsPage";
import { UserInfoPage } from "../pages/UserInfoPage";

export const Router=()=>{
    return(

        <Routes>
            {/*タイトル画面 */}
            <Route path="/" element={<HomePage/>}/>
            {/*学習画面 */}
            <Route path="/cards" element={<LearningCardPage/>}/>
            {/*カード新規作成 */}
            <Route path="/create" element={<CreateCardPage/>}/>
            {/*カード一覧を見る */}
            <Route path="/cards" element={<ShowCardsPage/>}/>
            {/*進捗状況を見る */}
            <Route path="/progress" element={<Progress/>}/>
            {/*ユーザ情報を確認する画面*/}
            <Route path="/userinfo" element={<UserInfoPage/>}/>



        </Routes>
    );
};