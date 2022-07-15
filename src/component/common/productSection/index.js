import React from 'react'
import ProductCard from './productCard'
import "./productSection.css"
const ProductSection = ({list,collectionName}) => {
  return (
    <div className="max-width product-section"> 
    <div className="collection-title">
      {collectionName}
      </div>
      <div className="product-grid">
{list.map((restaurant)=>{
  return <ProductCard restaurant={restaurant}/>
})}
      </div>
      </div>
  )
}

export default ProductSection;