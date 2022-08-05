// import React, {useState} from "react";
function Modal(props) {
    // let [modal, setModal]=useState(false);
    //   function hideDetails(){
    //     setModal(false);
    //   }
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="modal">
            <button  className="btn" onClick={props.onClick}> ❌ </button>
            <img src={props.img} className="modal-img" />
            <h3>{props.title}</h3>
            <p>{props.desc} {props.year} {props.genere}</p>
 <button className="btn1" onClick={() => openInNewTab('https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677') }>Open</button>
              
            
        </div>

    );
}

export default Modal;
