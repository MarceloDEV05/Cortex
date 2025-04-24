 import NavBar from "./navbar"
 import Logo from "./Logo"
 
 function Header(){
    return(
      <header className="bg-cover border-b-2 bg-[#1b1b1b] h-[90px] fixed flex items-center justify-around align-middle w-full" >
         <Logo/>
         <NavBar/>
    </header>
    )
 }

 export default Header