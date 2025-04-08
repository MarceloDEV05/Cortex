import SectionImg from "../../components/SectionImg"
import SectionTxt from "../../components/SectionTxt"

 
 function Home() {
    return(
        <div className="flex items-center justify-around">
           <SectionImg/>
           <SectionTxt/>
        </div> 
    )
 }

 export default Home