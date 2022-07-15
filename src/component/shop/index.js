import React from 'react'
import { restaurants } from '../../data/shopout';

import Filters from '../common/filters';
import ProductSection from '../common/productSection';
import "./shop.css";
import ShopCollections from './shopCollections';
import TopBrands from './topBrands';
const shopFilters=[
  {
    id:1,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title:'Filters',
  },
  {
    id:2,
    title:'Rating 4.0+',
  },
  {
    id:3,
    
    title:'Eco-friendly items',
  },
  {
    id:4,
    
    title:'Sales',
  },
  {
    id:5,
    title:'Offers',
  }
];
const restrauntList=restaurants;
const Shop = () => {
  return (
    <div>
      <div className="max-width">
      <Filters filterList={shopFilters}/>
      </div>
      <ShopCollections/>
      <TopBrands/>
      
      <ProductSection list={restrauntList} collectionName='Products in Lucknow'/>  
    </div>

    
  )
}

export default Shop;