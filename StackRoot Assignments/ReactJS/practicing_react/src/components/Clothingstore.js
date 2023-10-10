import React, { useState, useEffect, } from 'react';
import ClothingItem from './ClothingItems';

function ClothingStore() {
  const [clothingItems, setClothingItems] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')

      .then((response) => response.json())

      .then((data) => setClothingItems(data))

      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  return (
    <div className="clothing-store">
      {clothingItems.map((item) => (
        <ClothingItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ClothingStore;