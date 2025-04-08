 import { BrowserRouter, Routes, Route } from "react-router-dom";

 function RoutesApp(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route />
                <Route />
                <Route />
                <Route />
                <Route />
            </Routes>
        </BrowserRouter>

    )
 }

 export default RoutesApp