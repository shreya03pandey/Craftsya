import React from 'react'
import "./productCard.css";
const ProductCard = ({restaurant}) => {
    const name=restaurant?.info?.name??"";
    const coverImg=restaurant?.info?.image?.url;
    // const deliveryTime=restaurant?.order?.deliveryTime;
    const rating=restaurant?.info?.rating?.rating_text;
    const approxPrice=restaurant?.info?.cfo?.text;
    const offers=restaurant?.bulkOffers??[];
    const cuisines=restaurant?.info?.cuisine?.map((item)=>item.name).slice(0,3);
    // const bottomContainers=restaurant?.bottomContainers;
    const goldOff=restaurant?.gold?.text;
    const proOff=offers.length>1?offers[0].text:null;
  return (
    <div className="product-card cur-po">
        <div className="product-card-cover">
           <img src={coverImg} alt={name} className="product-card-image"/>
          {proOff && <div className="pro-off ">{proOff}</div>}
          {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
          </div>
          <div className="res-row">
           <div className="res-name">{name}</div>
          {rating && (<div className="res-rating absolute-center">
              {rating} <i className="fi fi-rr-star absolute-center"></i>
              </div>
              )}
        </div>
        <div className="res-row">
           
  
        {approxPrice &&<div className="approx-price">{approxPrice}</div>}
        </div>
    </div>
  );
};

export default ProductCard;