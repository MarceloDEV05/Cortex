import { useState } from "react";

function BoxForTask (){
const [text, setText] = useState("")
const [does, setDoes] = useState([])

const appTodo = (e) => {
    e.preventDefault()
    return setDoes([...text,does])
}

return(

<div id="boxForTask" className={`z-99 bg-black/80 h-full w-full justify-center align-middle left-0 top-0 fixed`}>
<div id="boxTask" className="w-[450px] h-[560px] bg-white m-auto mt-[90px] rounded-[20px]">
    <div className="pt-14">
    <form>
        <h1 className="text-center font-bold text-3xl">Tarefas</h1>

        <aside id="inputs" className="mt-20 columns-1 text-center align-middle">
            <h1>Descreva sua tarefa:</h1><br />
            
            <input type="text" className="border-2 w-[290px] pt-[10px] p-[10px] rounded-[8px]"
             placeholder="Nome da tarefa"
            /><br />
            
            <input type="text" className="border-2 w-[290px] mt-[15px] pt-[10px] p-[10px] rounded-[8px]" 
            placeholder="Descrição da tarefa (*opcional)" />
            
        </aside>

        <article id="buttons" className="flex justify-around mt-10">
           <div id="btnAdd">
            <button type="submit" className="border-2 w-40 p-[10px] rounded-[8px]">adicionar</button>
           </div>

            <div id="btnCancel">
                <button className="border-2 w-40 p-[10px] rounded-[8px]">cancelar</button>
            </div>

        </article>
        </form>
    </div>
</div>
</div>

);

}

//export default BoxForTask;