import React from 'react'
import './App.css'
import imgSession1 from './assets/uma_interface_simples_com_cores_pretas_e_verdes_para_o_app_Cortex_de_gestão_de_agenda__tarefas_e_finanças-removebg-preview.png'
import imgSessionTodo from './assets/Subtítulo-removebg-preview.png'
import NavBar from './components/navbar.jsx'


function App() {

  return (
    <div id="app" className='bg-cover'>
      <header className=' mt-5 h-[50px] items-center flex justify-around'>
        <h1 id='name' className="text-3xl text-white ">Cortex</h1>

        <NavBar/>

      </header>

      <section id='app-session1' className='mt-40 flex items-center justify-around'>
        <article>
          <h1 className='text-white text-4xl font-bold'>Bem vindo ao Cortex</h1>
          <p className='text-white max-w-[600px]'> sit amet consectetur adipisicing elit. Velit, consequuntur incidunt, delectus vitae suscipit, 
            temporibus ipsam at esse veniam animi sunt dolore perspiciatis numquam doloremque nemo provident officiis totam. Dicta?</p>
        </article>

        <aside id='img-session1'>
          <img src={imgSession1} alt="" className='rounded-full' />
        </aside>
      </section>

      <section id='session-todo' className='flex justify-around items-center'>
            <aside>
              <img src={imgSessionTodo} alt="imgSessionTodo" className='w-[350px]' />
            </aside>

            <article className=''>
              <h1 className='text-white text-4xl font-bold'>Cortex TO-DO</h1>
              <p className='text-white max-w-[600px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis autem non sequi,
                 nam voluptas eligendi corporis reiciendis asperiores eveniet 
                pariatur natus earum, impedit placeat voluptatum. Recusandae quidem nulla adipisci velit?</p>
            </article>
      </section>

    </div>
  )
}

export default App
