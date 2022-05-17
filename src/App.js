import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


//components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
//import Navbar from "./components/Navbar/Navbar";
//import Modal from "./components/Modal/Modal"

import Cookies from "js-cookie";



function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 10 });
    } else {
     
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }

    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };



  return (
  

    <Router>
      <Header token={token} setUser={setUser}/> 
  
      <Routes>    
        <Route path="/characters" element={<Characters/>} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
