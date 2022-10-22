import { memo } from 'react';
import Modal from 'react-modal';
import { MiniQuestionCard } from '../molecules/MiniQCard';
import question from "../../types/Question";
import { sampleQuestions } from '../../data/sampleQuestionAndAnswer';


type Props ={
    question?:question;
    modalIsOpen:    boolean;
    closeModal: ()=>void;
};

const CardModal=(props: Props)=>{
    const custimStyles={
        overlay: {
            backgroundColor: "rgba(20,20,20,0.20)",
            color: "#262D37",
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
    };
    const css:string="bg-slate-300 w-180 mx-10 mt-8 p-5 text-xl leading-10 rounded";
    const q:question=(props.question===undefined)?sampleQuestions[0]:props.question;
    return(
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={custimStyles}
            contentLabel="Modal"
            className="w-full w-2/4  mx-auto p-3 overflow-scroll bg-white"
        >
            <MiniQuestionCard 
                question={q}
                css={css}
                onClickAbout={()=>{}}
                heightAll={"h-96"}
                questionTextSize={"h-72 text-3xl"}
                answerTextSize={"h-72 text-xl"}
            />
        </Modal>
    )
   
}
const MemolizedCardModal = memo(CardModal);

export default MemolizedCardModal;