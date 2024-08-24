import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../App";
import { CartContext } from '../context/CartContext';

const OrderComponent = () => {

  const [name, setName] = useState('Anonimo');
  const [email, setEmail] = useState('anoniom@gmskk.com');
  const [phone, setPhone] = useState('2232323');


  const { cart, clearCart, totalPrice } = useContext(CartContext);


  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();


    const order = {
      buyer: {
        name,
        email,
        phone,
      },
      items: cart.map(item => ({ id: item.id, title: item.title, price: item.price })),
      total: totalPrice(),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      console.log('Order created with ID: ', docRef.id);



      clearCart();


      navigate(`/order-confirmation/${docRef.id}`);
    } catch (error) {
      console.error('Error creating order: ', error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default OrderComponent;