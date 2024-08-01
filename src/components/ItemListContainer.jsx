import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App';
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems =  () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, title: 'Campo de 8 hectareas en Zarate', description: 'Casa Zarate', price: 6940, pictureUrl: 'https://a0.muscache.com/im/pictures/0a02fbd5-b0f3-4f59-9d11-14fc127e6136.jpg?im_w=720' },
            { id: 2, title: 'Campo en Misiones', description: 'Campo Misiones', price: 5949, pictureUrl: 'https://www.bienesonline.com/paneldecontrol/photos2/campos-y-chacras-en-misiones-y-norte-de-corrientes-13792963624.jpg' },
            { id: 3, title: 'Departamento en Puerto Madero', description: 'Departamento Puerto Madero', price: 3400, pictureUrl: 'https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/674/674862.jpg' },
          ]);
        }, 2000);
      });
    };

    fetchItems().then(data => setItems(data));
  }, []);

  return (
    <div >
      <h1 className="catalogo">Catálogo de Productos</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer