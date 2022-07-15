import React from 'react';
import"./exploresection.css";
import Slider from "react-slick";
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';
import ExploreItem from './exploreItem';
const exploreItems=[
    {
        id:1,
        title:"Laundary Basket",
        price:" Rs 800",
        cover:"https://www.kopaipaar.com/wp-content/uploads/2022/02/BlueN-Natural-Fibre-Laundry-Basket-Kopai-Paar-600x480.jpg",
    },
    {
        id:2,
        cover:"https://www.kopaipaar.com/wp-content/uploads/2019/10/Cushion-Blue-Stork-Katha2-600x480.jpg",
        price:" Rs 950",
        title:"Blue Stork",
    },
    {
        id:3,
        title:"Colorful-birdie",
        price:" Rs 560",
        cover:"https://www.kopaipaar.com/wp-content/uploads/2020/06/Handcrafted-Animal-Cushion-Birds-Colourful4-600x480.jpg",
    },
    {
        id:4,
        title:"Orange CrossSet",
        price:" Rs 1100",
        cover:"https://www.kopaipaar.com/wp-content/uploads/2020/10/Kopai-Paar-handmade-cushion-orange-cross-set-600x480.jpg",
    },
    {
        id:5,
        title:"Potli Bags",
        price:" Rs 600",
        cover:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPVLO8-udNIh8HUO_vcuN_ls44dfgJBDIRjI1GD-0zimEKUa-0fwr5rRq22Y0L3Tlvs0ML6HD4Zi7R-DtPvvb7K3m0_6iq1Co5yrzPBNeyzmkkXFjUKMtemg&usqp=CAc",
    },
    {
        id:6,
        title:"Wall Decor",
        price:" Rs 1200",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6redtjUNTTRDkx08-qUkAe1AB3uEJzQk6Q&usqp=CAU",
    },
    {
        id:7,
        title:"NeckLace",
        price:" Rs 300",
        cover:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMTeJmqwOVzbJsCU73bSqOnSFo8KeqKs3zdYxDrQG1I3-71ExT5B3gHqk9HGTDUocNmqABaYKSOHA&usqp=CAc",
    },
    {
        id:8,
        title:"Standard Lamp",
        price:" Rs 2000",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_pJeWSo53BvXWkaxE-vS5ot5I68qksf0mA&usqp=CAU",
    },

];
const settings={
    infinite:true,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};
const ExploreCollections=()=> {
    return (
        <div className='explore-collections'>
            <div className='max-width'>
                <div className='collection-title'>Latest Products</div>
                <div className="collection-subtitle">
                    <div className="collection-st-text">
                        Explore curated list of latest and trendy products in Lucknow
                    </div>
                    <div className="collection-location">
                        <div className="location-text">
                            All collections in Lucknow
                        </div>
                        <i className="fi fi-rr-caret-right absolute-center"></i>
                    </div>
                </div>
                <div className='item-name'>
                <Slider {...settings}>
               {exploreItems.map((item)=>{
                return <ExploreItem item={item}/>;
              })}

             </Slider>
            
            </div>
            </div>
        </div>
    );
};

export default ExploreCollections;