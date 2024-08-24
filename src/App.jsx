import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Cart.jsx';
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";
import Nosotros from "./components/Nosotros";

function App() {
    useEffect(() => {
      const db = getFirestore();

      const refDoc = doc(db, "items", "N5fCLUxWKVmaxThMkwpW");

      getDoc(refDoc).then((snapshot) => {
        console.log({ id: snapshot.id, ...snapshot.data() });
      });
     });
      return (
  
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:id" element={ <ItemListContainer  />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />}  />
          <Route path="/contacto" element={<Contacto />}  />
          <Route path="/Cart" element={<Cart />} />
          
        </Routes>


      </BrowserRouter>
    
  );
}

export default App;