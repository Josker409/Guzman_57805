import React from 'react';
import { Link } from 'react-router-dom';
import "../App";


const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className='item'>
      <h2 className='titulo'>{title}</h2>
      <img className="item-image"  src={pictureUrl} alt={title} />
      <p className='desc'>{description}</p>
      <p className='precio'>Precio: ${price}</p>
      <Link className='btn' to={'/item/${producto.id}'}>Ver Mas</Link>
    </div>
  );
};

export default Item;