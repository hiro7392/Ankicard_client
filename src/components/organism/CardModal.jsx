import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

type Props={
    modalIsOpen:boolean;
    closeModal:()=>void;
};

const CardModal=(props: Props)=>{
    const custimStyles={
        overlay: {
            backgroundColor: "rgba(0,0,0,0.80)",
            color: "#262D37",
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
    }
}


const props = {};

ReactDOM.render(<CardModal {...props} />, document.getElementById('main'))
export default CardModal;