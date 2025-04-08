
import Header from "../../components/Header"
import NavBar from "../../components/navbar"
import SectionImg from "../../components/SectionImg"
import SectionTxt from "../../components/SectionTxt"

 
 function Home() {
    return(
        <div className="">
        <div className="bg-cover h-[90px] flex items-center justify-around align-middle" >
            <Header/> 
            <NavBar/>
        </div>
        
            <div className="flex justify-around items-center mt-10">
                <SectionImg/>
                <SectionTxt/>
            </div>
        

        </div>
    )
 }

 export default Home