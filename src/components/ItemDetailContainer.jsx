

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 2,
            name: "Campo en Misiones",
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
            price: 2400,
            imageUrl:
              "https://www.bienesonline.com/paneldecontrol/photos2/campos-y-chacras-en-misiones-y-norte-de-corrientes-13792963624.jpg",
          });
        }, 2000);
      });
    };
    fetchItem().then((data) => {
      setItem(data);
    });
  }, []);

  return <div>{item ? <ItemDetail item={item} /> : <p>Cargando...</p>}</div>;
};

export default ItemDetailContainer;