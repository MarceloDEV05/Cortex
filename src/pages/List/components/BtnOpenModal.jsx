import { useState } from "react"
import ModalTask from "./ModalTask";

function BtnOpenModal({ openModal }){

    return(
        <div className="mt-5 p-[10px] transition delay-150 duration-300 ease-in-out rounded-[8px] bg-green-500 hover:scale-110 hover:-translate-y-1 hover:bg-green-700 hover:">
            <button className="text-white" onClick={openModal}>Abrir Modal</button>
        </div>
    )
}

export default BtnOpenModal;