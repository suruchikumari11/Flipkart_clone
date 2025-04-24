// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Carosel from "./components/Carosel.jsx";
import Products from "./components/Products.jsx";
import CustomRoutes from "./customRoutes/customRoutes.jsx";
import Phone from "./components/phone.jsx";




function App() {
    return (
        <>
            <Navbar />
            <Carosel />
            <CustomRoutes/>
            
           
        </>
            
        
    );
}

export default App;
