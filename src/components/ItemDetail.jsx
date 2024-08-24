import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

    const onAdd = (quantity) => {
        setCount(quantity);
        setShowCount(false);                
    };

 const CartContext = createContext();

 export const useCart = () => useContext(CartContext);

 export const CartProvider = ({ children }) => {
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);

    return(
        <CartContext.Provider value={{ purchaseCompleted, setPurchaseCompleted }}>
            {children}
        </CartContext.Provider>
    )
}

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const [showCount, setShowCount] = useState(true);
    const navigate = useNavigate();

    const onAdd = (quantity) => {
        setCount(quantity);
        setShowCount(false);                
    };
    

    return(
        <div>
            <h2>{item.name}</h2>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            {showCount ? (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            ): (
                <button onClick={() => navigate("/cart")}>Finalizar la compra</button>
            )}
        </div>
    );
};

export default ItemDetail;