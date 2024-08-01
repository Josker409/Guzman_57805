import React, { useState } from "react";
import ItemCount from "./ItemCount";

    const onAdd = (quantity) => {
        setCount(quantity);
        setShowCount(false);                
    };


const ItemDetail = ({ item}) => {
    const [count, setCount] = useState(0);
    const [showCount, setShowCount] = useState(true);
    

    return(
        <div>
            <h2>{item.name}</h2>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            {showCount ? (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            ): (
                <button onClick={() => history.pushState("/cart")}>Finalizar la compra</button>
            )}
        </div>
    );
};

export default ItemDetail;