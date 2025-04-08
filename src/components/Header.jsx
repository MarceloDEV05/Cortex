 import NavBar from "./navbar"
 import Logo from "./Logo"
 
 function Header(){
    return(
      <header className="bg-cover h-[90px] flex items-center justify-around align-middle" >
         <Logo/>
         <NavBar/>
    </header>
    )
 }

 export default Header