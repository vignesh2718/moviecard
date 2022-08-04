// import React, {useState} from "react";
function Modal(props) {
    // let [modal, setModal]=useState(false);
    //   function hideDetails(){
    //     setModal(false);
    //   }
    return (
        <div className="modal">
            <button  className="btn" onClick={props.onClick}> ❌ </button>
            <img src={props.img} className="modal-img" />
            <h3>{props.title}</h3>
            <p>{props.desc} {props.year} {props.genere}</p>
              
            
        </div>

    );
}

export default Modal;