import React from "react";
import "../styles/modal.css"
export default function Modal({ closeModal }){
    return <div className="modalBackground">
        <div className="modalContainer">
            <div>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="body">
                <p>User succesfully created!</p>
            </div>
        </div>
    </div>
}