import { Route, Routes } from "react-router-dom";
import { CreateCardPage } from "../components/pages/CreateCardPage";
import { HomePage } from "../components/pages/HomePage";
import { Progress } from "../components/pages/ProgressPage";
import { LearningCardPage } from "../components/pages/LearningCardPage";
import { ShowCardsPage } from "../components/pages/ShowCardsPage";
import { UserInfoPage } from "../components/pages/UserInfoPage";
import { LoginPage } from "../components/pages/LoginPage";

export const Router=()=>{
    return(

        <Routes>
            {/*タイトル画面 */}
            <Route path="/" element={<HomePage/>}/>
            {/*ログイン画面 */}
            <Route path="/login" element={<LoginPage/>}/>
            {/*学習画面 */}
            <Route path="/cards" element={<LearningCardPage/>}/>
            {/*カード新規作成 */}
            <Route path="/create" element={<CreateCardPage/>}/>
            {/*カード一覧を見る */}
            <Route path="/usercards" element={<ShowCardsPage/>}/>
            {/*進捗状況を見る */}
            <Route path="/progress" element={<Progress/>}/>
            {/*ユーザ情報を確認する画面*/}
            <Route path="/userinfo" element={<UserInfoPage/>}/>


        </Routes>
    );
};