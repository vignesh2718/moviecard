import Modal  from "./Modal";
import Backdrop from "./Backdrop";
import React, {useState} from "react";

function MovieCard(props){
    let [modal, setModal]=useState(false);



    function showDetailsHandler(){
        setModal(true);
    }
    function hideDetails(){
        setModal(false);
    }
    function none(){
        setModal (true);
    }
    return(
       
           < div className="movie-card">
         <div className="movie-header">
    
          <img className="movie-img" src={props.img} onClick={showDetailsHandler}></img>
          <h2 className="movie-name">{props.title}</h2>
           <p className="genre" >{props.genere}  { props.year}</p>
 
                 </div>
                 {modal ? <Modal img={props.img} title={props.title}  year={props.year}  genere ={props.genere}   onClick={hideDetails}/> : null }
                 
                 {modal ? <Backdrop  onClick={none} /> :null}
{/* <Backdrop/> */}
              </div>


    );
}

export default MovieCard;