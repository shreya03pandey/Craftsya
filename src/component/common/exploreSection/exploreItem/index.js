import React from 'react';
import "./exploreItem.css";
const ExploreItem = ({item}) => {
  return (<div>
      <div className='explore-item-cover'>
      <img src={item.cover} className='explore-item-image' alt={item.title}/>
  </div>
  <div className='explore-item-title'>{item.title}</div>
  <div className='explore-item-price'>{item.price}</div>
  </div>);
  
};

export default ExploreItem;