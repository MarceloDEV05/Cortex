import NavBar from "../components/navbar";

function PageTodo() {
    return (
        <div id="appTodo" className="bg-cover h-[100vh]">
           <div id="header" className=' mt-5 h-[50px] items-center flex-col justify-around'>
              <h1 className="text-white text-3xl">Cortex To-Do</h1>
                 <NavBar/>
           </div>

           <div id="interface-to-do" className="mt-[170px]">
            <div className="text-center">
                <input type="text" placeholder="Digite uma tarefa" className="w-[250px] p-[10px] rounded-full outline-none"/>

                </div>
                <div id="buttonAddTask">
                    <button></button>
                </div>
           </div>
        </div>
)}

export default PageTodo;