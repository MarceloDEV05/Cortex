 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "./pages/Home";
 import List from "./pages/List";

 function RoutesApp(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/tasklist" element={ <List/>} />
                <Route />
                <Route />
                <Route />
                <Route />
            </Routes>
        </BrowserRouter>

    )
 }

 export default RoutesApp