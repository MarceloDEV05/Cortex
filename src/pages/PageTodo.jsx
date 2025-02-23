import NavBar from "../components/navbar";
import pngcentral from "../assets/1187525.png";
import { useState} from 'react'
import boxForTask from "../components/boxForTask";



function PageTodo() {




    return (
        <div id="appTodo" className="h-screen w-full ">
            <div id="header" className='h-[100vh] w-[200px] flex-col top-0 left-0 fixed bg-black border-white border-r-2 '>
                <h1 className="text-white text-3xl mt-10 ml-10">Cortex</h1>
                <nav className="mt-20">
                    <NavBar />
                </nav>

            </div>

            <div id="interface-to-do" className="mt-[170px]">
                <div className="flex justify-center">
                    <img src={pngcentral}  alt="imagem-central" />
                    </div>

                <aside className="text-center mt-3">
                    <h1 className="text-white font-bold text-3xl">Adicione sua primeira tarefa</h1>
                </aside>

                <section className="">
                    <article className="fixed flex right-16 mt-40">
                        <button id="addTask" onClick={boxForTask} className="bg-black text-green-600 text-4xl rounded-full
                         size-12 align-middle justify-center text-center">+</button>
                    </article>
            </section>
            </div>

            <boxForTask />
        </div>
    )
}

export default PageTodo;