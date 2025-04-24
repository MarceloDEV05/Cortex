import Img from "/src/assets/1187525.png";
import BtnOpenModal from "./components/BtnOpenModal";
import ModalTask from "./components/ModalTask";
import { useState } from "react";

function List() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-[#18181b] h-[100vh] w-full flex flex-col">


      <div className="justify-center items-center text-center m-auto flex flex-col ">

        <img src={Img} alt="imagem da tarefa" />
        <h1 className="text-3xl text-white">Você ainda não possui tarefas</h1>
        <p className="text-white">Abra o Modal para adicionar uma tarefa</p>

        <BtnOpenModal openModal={() => setModalOpen(true)}/>
         
      </div>
      
      <ModalTask openModal={modalOpen} close={()=>setModalOpen(false)}/>

    </div>
   
  );
}

export default List;
