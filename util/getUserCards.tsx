import axios from "axios";
import {localURLPrivateGetCards} from "../src/api/client";
import question  from "../types/Question"
import { sampleQuestions, sampleQuestionsCols } from "../src/data/sampleQuestionAndAnswer";
const client = axios.create({
    baseURL: localURLPrivateGetCards,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

const getUserCards=()=>async()=>{
    client.get(``)
    .then((res)=>{
        let  cards:question[]=[];
        // 1行にnumsPercols個ずつ並べて表示する
        for(let i=0;i<res.data.length;i++){
                    const q:question={
                        id              :res.data[j].card_id,
                        ownUserId       :res.data[j].created_user_id,
                        QuestionText    :res.data[j].question_text,
                        LearningLevel   :res.data[j].learning_level,
                        AnswerText      :res.data[j].answer_text,
                        TagName         :res.data[j].tag_name,
                    }
            cards=[...cards,q];
        }
        return cards;
    }).catch((res)=>{
        return sampleQuestions
        alert('エラーが発生しました');
    })
}

export default getUserCards;