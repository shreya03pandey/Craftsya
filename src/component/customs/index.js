import React from 'react'
import "./customs.css";
const Customs = () => {
  return (
    <div >
      
      <div className='about-title absolute-center'>
       Welcome to Craftsya
      </div>
      <div className='about-subTitle absolute-center'>
      Giving your Feeling a new Style!
      </div>
      <div className="custom-cover">
        <img src="https://www.kopaipaar.com/wp-content/uploads/2019/07/1440x653-05.jpg" className="bg-image absolute center"/>
        <div className="picture-text">Craftsya</div>
        </div>
        <div className='paragraphs'>  
        <fieldset className='ourmission'>
          <legend className='ourmission-text'>Our Mission</legend>

        
       <p> The need to develop and support the handicraft community is necessary and immediate. It is essential for the development of the local communities at the grass - root level and for sustaining the dying crafts and traditions, which have been passed down generations.
         </p>
<p>
Craftsya was born from the seed of this thought and is driven by our love for the handcrafted. We believe that every contribution, no matter how small, helps and that supporting crafts, artisans and artists must be a conscious decision.
</p>
<p>
Within the heart of India, in its villages, the men and women create unique craft pieces using the naturally available resources around them. We work closely with the artisans to understand their techniques, and create unique and sustainable items, with emphasis on innovative, eye catching designs and superior quality. We believe in fair pricing for the artisans, and create an environment where the artisans and their craft is respected and celebrated.
</p>
</fieldset>
        </div>
        <div className='way-title absolute-center'>The Craftsya Way</div>
        <div className="about-way absolute-center" >
          <div className="box-title" >
            <img src="https://www.kopaipaar.com/wp-content/uploads/2017/02/infographic1111.png" className="way-image"/>
            <div className="way-text">Identify talented artisans</div>
          </div>
          <div><img src="https://www.kopaipaar.com/wp-content/uploads/2017/02/arrow_mcr_.png"/></div>
          <div className="box-title" >
            <img src="https://www.kopaipaar.com/wp-content/uploads/2017/02/infographic22.png" className="way-image"/>
            <div className="way-text">Collaborate on designs and create unique handcrafted pieces</div>
          </div>
          <div><img src="https://www.kopaipaar.com/wp-content/uploads/2017/02/arrow_mcr_.png"/></div>
          <div className="box-title" >
            <img src="https://www.kopaipaar.com/wp-content/uploads/2017/02/infographic33.png" className="way-image"/>
            <div  className="way-text">Bring the handicrafts to the discerning customers</div>
          </div>
          <div><img src="https://www.kopaipaar.com/wp-content/uploads/2017/02/arrow_mcr_.png"/></div>
          <div className="box-title"  >
            <img src="https://www.kopaipaar.com/wp-content/uploads/2017/02/infographic44.png" className="way-image"/>
            <div  className="way-text">Help in sustaining the craft and the rural artisan communities</div>
          </div>
        </div>
    </div>
  )
}

export default Customs;