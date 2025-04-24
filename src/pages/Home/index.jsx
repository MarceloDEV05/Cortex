import SectionImg from "../../components/SectionImg"
import SectionTxt from "../../components/SectionTxt"

 
 function Home() {
    return(
        <div className="flex items-center w-full overflow-hidden h-[100vh] justify-around bg-[#18181b]">
           <SectionImg/>
           <SectionTxt/>
        </div> 
    )
 }

 export default Home