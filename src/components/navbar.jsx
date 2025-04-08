import { Link, useLocation } from "react-router-dom";

function NavBar() {
   const location = useLocation()
   const columnLayout = location.pathname === '/todo'
   return (

    
   <nav className={` ${columnLayout ? 'flex text-white flex-col space-y-4 ml-10' : 'flex space-x-5 text-white'}`}>
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