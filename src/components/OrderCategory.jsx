import React from 'react';
import { useParams } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  return (
    <div>
      <h1>¡Gracias por tu compra!</h1>
      <p>Tu orden ha sido creada con éxito. El ID de tu orden es: {orderId}</p>
    </div>
  );
};

export default OrderConfirmation;