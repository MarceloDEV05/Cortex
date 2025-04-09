import { Link } from "react-router-dom";

function NavBar() {
   return (

    
   <nav className='text-white flex gap-4'>
    <Link to="/" className=''>Home</Link>
    <Link to="/tasklist" className=''>Tarefas</Link>
    <Link to="/finanças" className=''>Finanças</Link>
    <Link to="/agenda" className=''>Agenda</Link>
    <Link to="/planos" className=''>Planos</Link>
    <Link to="/cadastro" className=''>Cadastre-se</Link>

  </nav>

   )
}

export default NavBar;