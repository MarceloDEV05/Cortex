import NavBar from "../components/navbar";

function PageTodo() {
    return (
        <div id="appTodo" className="bg-cover h-[100vh]">
           <div id="header" className='h-[100vh] w-[300px] ml-0 flex-col bg-black sticky border-white border-r-2'>
              <h1 className="text-white text-3xl ml-10 mt-10">Cortex To-Do</h1>
              <nav className="mt-20">
               <NavBar/>
              </nav>
                 
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