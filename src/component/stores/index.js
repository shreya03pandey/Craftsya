import React from 'react'
import "./stores.css";
import { dining } from '../../data/storeout';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import ProductSection from '../common/productSection';
const storesFilters=[
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
    title:'Pro-offers',
  },
  {
    id:4,
    
    title:'Distance',
  },
  {
    id:5,
    title:'Open-Now',
  },
  {
    id:6,
    title:'Booking',
  },
  {
    id:7,
    title:'Merchants',
  },
];
const Stores = () => {
  return (
    <div>
    <div><ExploreSection/></div>
    <div className="max-width">
      <Filters filterList={storesFilters} />
    </div>
    <ProductSection list={dining} collectionName="Our Stores"/>
    </div>
  )
}

export default Stores;