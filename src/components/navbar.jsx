import { Link } from "react-router-dom";

function NavBar() {
   return (

    <nav className='flex text-white gap-6'>
    <Link to="/" className=' hover:border-b-[1px] '>Home</Link>
    <Link to="/todo" className=' hover:border-b-[1px] '>To Do</Link>
    <Link to="/finanças" className=' hover:border-b-[1px] '>Finanças</Link>
    <Link to="/agenda" className=' hover:border-b-[1px] '>Agenda</Link>
    <Link to="/planos" className=' hover:border-b-[1px] '>Planos</Link>
    <Link to="/planos" className=' hover:border-b-[1px] '>Cadastre-se</Link>

  </nav>

   )
}

export default NavBar;