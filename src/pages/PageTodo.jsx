import NavBar from "../components/navbar";
import pngcentral from "../assets/1187525.png";

function PageTodo() {
    return (
        <div id="appTodo" className="bg-cover h-[100vh]">
            <div id="header" className='h-[100vh] w-[300px] flex-col left-0 top-0 bg-black fixed border-white border-r-2 z-10'>
                <h1 className="text-white text-3xl mt-10 ml-10">Cortex To-Do</h1>
                <nav className="mt-20">
                    <NavBar />
                </nav>

            </div>

            <div id="interface-to-do" className="mt-[170px]">
                <div className="flex justify-center">
                    <img src={pngcentral} alt="imagem-central" />
                    </div>

                <aside className="text-center mt-3">
                    <h1 className="text-white font-bold text-3xl">Adicione sua primeira tarefa</h1>
                </aside>

                <div id="buttonAddTask">
                    <button>+</button>
                </div>

            </div>
        </div>
    )
}

export default PageTodo;