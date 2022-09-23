import { Route, Routes } from "react-router-dom";
import { CreateCardPage } from "../components/pages/CreateCard";
import { HomePage } from "../components/pages/Home";
import { Progress } from "../components/pages/UserProgress";
import { LearningCardPage } from "../components/pages/Learning";
import { ShowCardsPage } from "../components/pages/UsersCards";
import { UserInfoPage } from "../components/pages/UserInfo";
import { LoginPage } from "../components/pages/Login";

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