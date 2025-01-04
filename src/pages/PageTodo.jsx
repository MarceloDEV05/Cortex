import NavBar from "../components/navbar";

function PageTodo() {
    return (
        <div id="appTodo" className="bg-cover h-[100vh]">
           <div id="header" className='h-[100vh] w-[300px] flex-col left-0 top-0 bg-black fixed border-white border-r-2 z-10'>
              <h1 className="text-white text-3xl mt-10 ml-10">Cortex To-Do</h1>
              <nav className="mt-20">
               <NavBar/>
              </nav>
                 
           </div>

           <div id="interface-to-do" className="mt-[120px]">
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