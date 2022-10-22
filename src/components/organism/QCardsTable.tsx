import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { sampleQuestions, sampleQuestionsCols } from "../../data/sampleQuestionAndAnswer";
import { MiniQuestionCard } from "../molecules/MiniQCard";
import {localURLPrivateGetCards} from "../../api/client";
import question  from "../../types/Question"
import MemolizedCardModal from "./CardModal";
import getUserCardsWrapper from "../../util/getUserCards"
const numsPercols:number=3;
const client = axios.create({
    baseURL: localURLPrivateGetCards,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

const getUserCards=getUserCardsWrapper();

export const QuestionCardsTable=()=>{
    //  ユーザのカード情報を取得して10件まで表示する
    const [colsCards,setColsCards]=useState<question[][]>(sampleQuestionsCols);  //行ごとに保存
    const [modalQuestion,setModalQuestion]=useState<question>();                 //全てのカード
    const [userCreatedCards,setUserCreatedCards]=useState<question[]>();
    const [modalIsOpen,setIsOpen]=useState(false);

    const toggleModalState = useCallback(
        () => setIsOpen((beforeModalState) => !beforeModalState),
        []
    );

    const handleClick = useCallback(
        (id:number) => {
          const newQuestion=(userCreatedCards!==undefined)?userCreatedCards.find((card)=>card.id===id): sampleQuestions[0];
          setModalQuestion(newQuestion)
          toggleModalState();
        },
        [toggleModalState]
    );
    //  カード取得及び初期化
    const getAndSetUserCards=async ()=>{
        const cards=await getUserCards();
        setUserCreatedCards(cards); 
        setColsCards([]);   //set empty
        // 1行にnumsPercols個ずつ並べて表示する
        for(let i=0;i<cards.length;i+=numsPercols){
            let temp:question[]=[];
                for(let j=i;j<i+numsPercols;j++){
                    temp.push(cards[j]);
                }
            setColsCards((prev)=>[...prev,temp]);
        }
    }
   
    
    useEffect(()=>{
        getAndSetUserCards();
        console.log(colsCards);
    },[]);
    

    const css:string="bg-slate-300 w-80 mx-10 mt-8 p-5 text-xl leading-10 rounded";
    return(
        <>
            {<table className="m-auto">
                <tbody>
                    {colsCards.map((col,i)=>{
                        return(
                            <tr key={i}>
                                { col.map((q:question,index)=>{
                                    if(q===undefined){
                                        return(<td key={index+numsPercols*i}></td>);
                                    }else{
                                        return(
                                        <td key={index+numsPercols*i}>
                                            <MiniQuestionCard 
                                                question={q}
                                                css={css}
                                                // tag={quesiton.TagName!=null ? quesiton.TagName:"-----"}
                                                onClickAbout={handleClick}
                                                heightAll={"h-72"}
                                                questionTextSize={"h-48 text-sl"}
                                                answerTextSize={"h-48 text-sm"}
                                            />
                                            <MemolizedCardModal 
                                                question={modalQuestion}
                                                modalIsOpen={modalIsOpen}
                                                closeModal={toggleModalState}
                                            />
                                        </td>
                                        );
                                    }
                                })}
                            </tr>
                        );})
                    }
                </tbody>
            </table>}
            
        </>
    );
}