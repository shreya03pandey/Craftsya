import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./topBrands.css";
const topBrandsList=[
{
    id:1,
    time:"35 min",
    cover:"https://www.logolynx.com/images/logolynx/2c/2c11010eed266d559a6c77fbf44ef679.jpeg",
},
{
    id:2,
    time:"29 min",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Eh_0_CP_T9yyF6KfwGOQ8MXmF_juRoHRuA&usqp=CAU",
},
{
    id:3,
    time:"32 min",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWZh2BklglJK4HC1qQ_1nVGDB40eJRTrn9Q&usqp=CAU",
},
{
    id:4,
    time:"30 min",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOleEwlIral-vzAiUXog7tJRJmUN1q7Xyl-g&usqp=CAU",
},
{
    id:5,
    time:"38 min",
    cover:"https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/59167/optimized_large_thumb_stage.jpg",
},
{
    id:6,
    time:"35 min",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zn0-UMJ7QZ9cJszMV6sb9gytRbzLZor2qw&usqp=CAU",
},
{
    id:7,
    time:"35 min",
    cover:"https://cdn.dribbble.com/users/2052465/screenshots/5569923/media/e127244b17f4e6e1ce5855ac567d1041.jpg?compress=1&resize=400x300",
},
];
const settings={
    infinite:true,
    slidesToShow:5,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top Brands for you</div>
        <Slider {...settings}>
            {topBrandsList.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' alt={brand.time}/>
                    </div>
                </div>
            })
            }
        </Slider>
    </div>
  )
}

export default TopBrands;