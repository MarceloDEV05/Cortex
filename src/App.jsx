import './App.css'
import img from './assets/uma_interface_simples_com_cores_pretas_e_verdes_para_o_app_Cortex_de_gestão_de_agenda__tarefas_e_finanças-removebg-preview.png'

function App() {

  return (
    <div id="app" className="">
      <header className='bg-conic(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,230,123,1) 99%); mt-5 h-[50px] items-center flex justify-around'>
        <h1 id='name' className="text-3xl text-white ">Cortex</h1>

        <nav className='flex text-white gap-6'>
          <a href="#" className=' hover:border-b-[1px] '>to do</a>
          <a href="#" className=' hover:border-b-[1px] '>finanças</a>
          <a href="#" className=' hover:border-b-[1px] '>agenda</a>
          <a href="#" className=' hover:border-b-[1px] '>planos</a>
          <a href="#" className=' hover:border-b-[1px] '>sobre</a>
          <a href="#" className=' hover:border-b-[1px] '>cadastre-se</a>
        </nav>
      </header>

      <section id='app-session1' className='mt-40 flex items-center justify-around'>
        <article>
          <h1 className='text-white text-4xl font-bold'>Bem vindo ao Cortex</h1>
          <p className='text-white max-w-[600px]'> sit amet consectetur adipisicing elit. Velit, consequuntur incidunt, delectus vitae suscipit, temporibus ipsam at esse veniam animi sunt dolore perspiciatis numquam doloremque nemo provident officiis totam. Dicta?</p>
        </article>

        <aside id='img-session1'>
          <img src={img} alt="" className='rounded-full' />
        </aside>
      </section>

      <section id='session-todo' className=''>
          
      </section>
    </div>
  )
}

export default App
