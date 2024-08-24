import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { collection, getDocs, query, where } from 'firebase/firestore';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const q = query(collection(db, 'items'), where('category', '==', categoryId));
      const querySnapshot = await getDocs(q);
      const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsList);
    };
    fetchItems();
  }, [categoryId]);
  return (
    <div>
      <h1>Productos en la categoría: {categoryId}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default CategoryPage;