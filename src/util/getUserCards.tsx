import axios from "axios";
import {localURLPrivateGetCards} from "../api/client";
import question  from "../types/Question"
import { sampleQuestions, sampleQuestionsCols } from "../data/sampleQuestionAndAnswer";
import { UrlWithStringQuery } from "url";
const client = axios.create({
    baseURL: localURLPrivateGetCards,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

const getUserCardsWrapper=()=>async()=>{
    let retCards:question[]=[];
    await client.get(``)
    .then((res)=>{
        // 1行にnumsPercols個ずつ並べて表示する
        for(let j=0;j<res.data.length;j++){
            const q:question={
                id              :res.data[j].CardId,
                ownUserId       :res.data[j].CreatedUserId,
                QuestionText    :res.data[j].QuestionText,
                LearningLevel   :res.data[j].LearningLevel,
                AnswerText      :res.data[j].AnswerText,
                TagName         :res.data[j].TagName,
            }
            retCards=[...retCards,q];
        }
    }).catch((error)=>{
        console.log(error);
        alert('エラーが発生しました');
        retCards=sampleQuestions;
    })
    return retCards;
}
export default getUserCardsWrapper;