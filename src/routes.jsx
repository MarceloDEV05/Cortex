 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "./pages/Home";
 import List from "./pages/List";
 import Header from "./components/Header";

 function RoutesApp(){
    return(

        <BrowserRouter>
            <Header/>
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