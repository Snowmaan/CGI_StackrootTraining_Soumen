import React from 'react';
function ClothingItem({ item }) {
  return (<div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
    <div className="card"  style={{ width: `400px` }}>
      <img src={item.image} alt={item.name} style={{ height: `380px` }} />
      <h3>{item.title}</h3>
      <p style={{ fontSize: 20}}>{item.description} </p>
      <span>${item.price}</span>
    </div>
    </div>
  );
}


export default ClothingItem;
