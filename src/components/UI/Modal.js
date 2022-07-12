import react from "react";
import classes from './Modal.module.css'
import  ReactDOM  from "react-dom";

const Backdrop = props=>{
    return <div className={classes.backdrop}></div>

}

const ModalOverlay = props=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )

}

const Modal = props=>{
    const renderLocation = document.getElementById('overlays')
    return(
        <>
        {ReactDOM.createPortal(<Backdrop/>,renderLocation )};
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, renderLocation)}
        </>
    )

}
 export default Modal;
