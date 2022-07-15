import React from 'react';
import ShopItem from './shopItems';
import Slider from "react-slick";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import"./shopcollections.css";
const shopItems=[
    {
        id:1,
        title:"Pots",
        cover:"https://rukminim2.flixcart.com/image/832/832/k6i7zww0/vase/g/f/d/dcreation2093-suninow-original-imafzyh2hrsz8aez.jpeg?q=70",
    },
    {
        id:2,
        title:"Vases",
        cover:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMQbbTzIHad1rCUaUmXq5wX2f0bIAoB9EDnl4nOZ808naXtURwom3PBoKJuqut-cnmO02LEuKE02F4CqFZACuM2qXN4qlsfwQx38qJMeX0CN27c3aPrSMRmA&usqp=CAE",
    },
    {
        id:3,
        title:"Bags",
        cover:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrs1hOJsbdwgejdpoodR_sVNxn-eZQtXQa5dlRWAgAkqS3WWP1tu5-75XH0uWFdKTUB5_GytAO6xilUWQozHF1ALPzkfro1XSEoO5uNjE&usqp=CAE",
    },
    {
        id:4,
        title:"Paintings",
        cover:"https://cdn.shopify.com/s/files/1/0500/0711/3892/products/vibecrafts-madhubani-art-elephant-premium-canvas-wall-painting-PTVCH_2212_3.jpg?v=1640602083",
    },
    {
        id:5,
        title:"Hangings",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2GPoBYmwJp1u37zS7vNJa8kBQSH4fbh34g&usqp=CAU",
    },
    {
        id:6,
        title:"Planters",
        cover:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNRofodcqswwWGjhMQGPJnqbY8jqmIGuK8whmmarwBvFFqYqnwmq_8zqW5XpPggUe-ZXxwMNTeAPxZ-_yK8ig2ClO_uZKqVV5S_TUubPCK8Tf7m1svhB-yZg&usqp=CAE",
    },
    {
        id:7,
        title:"jewellery",
        cover:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJHbIMJrPR-F0GpY_T-kFMdAU8EVd623vLwgeZdNqWGIjDP6ya5ovM8bjg_9IXk2065-KQ3RW-BdJ8XIHLEr5XdkilYLt0LoFmwAlGqiE&usqp=CAE",
    },
];
const settings={
    infinite:true,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};
const ShopCollections=()=> {
    return (
        <div className='shop-collection'>
            <div className='max-width'>
                <div className='collection-title'>Crafting your Curiosity</div>
                <div className='item-name'>
            <Slider {...settings}>
               {shopItems.map((item)=>{
                return <ShopItem item={item}/>;
              })}

             </Slider>
            </div>
            </div>
        </div>
    );
};

export default ShopCollections;