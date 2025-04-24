//import { useState } from "react"

function ModalTask({openModal, close}){
    if(!openModal) return null;

    return(
        <div className="bg-black/80 h-[100vh] w-[100%] z-[99] flex absolute">

            <div className="justify-center m-auto border w-[600px] h-[400px] rounded-[10px] bg-black text-white p-4">
                <h1 className="text-white text-center text-3xl">Adicionar Tarefa</h1>

                <div className="flex mt-10">
                    <input className=" border-b-2  w-full p-1 m-2 bg-transparent outline-none" 
                    type="text" 
                    placeholder="Digite uma tarefa"
                    />
                </div>

                <div className="flex justify-between p-4 ">
                    <div className="bg-[#171717] border rounded-[8px] p-[10px] w-[120px] text-center">
                        <button>Confirmar</button>
                    </div>

                    <div className=" bg-[#171717] border rounded-[8px] p-[10px] w-[120px] text-center">
                        <button onClick={close}>Cancelar</button>
                    </div>
                </div>
            </div>
      
        </div>
    )
}

export default ModalTask