import React from 'react';
import "./shopItem.css";
const ShopItem = ({item}) => {
  return (<div>
      <div className='shop-item-cover'>
      <img src={item.cover} className='shop-item-image' alt={item.title}/>
  </div>
  <div className='shop-item-title'>{item.title}</div>
  </div>);
  
};

export default ShopItem;