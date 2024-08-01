import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";
import Nosotros from "./components/Nosotros";

function App() {
  return (
  
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:id" element={ <ItemListContainer  />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />}  />
          <Route path="/contacto" element={<Contacto />}  />
          
        </Routes>


      </BrowserRouter>
    
  );
}

export default App;