import React from 'react';
import './tabOptions.css';
const tabs=[
    {
        id:1,
        name:"Home",
        inactive_img:"https://cdn.iconscout.com/icon/premium/png-128-thumb/craft-tool-1128640.png",
        active_img:"https://cdn.iconscout.com/icon/premium/png-128-thumb/crafting-tool-1514839-1285759.png",
    },
    {
        id:2,
        name:"Shop",
        inactive_img:"https://cdn.iconscout.com/icon/free/png-128/shopping-cart-3604495-3004994.png",
         backdrop:"FCEEC0",
         active_img:"https://cdn.iconscout.com/icon/premium/png-128-thumb/shopping-cart-71-543136.png",
    },
    {
        id:3,
        name:"Stores",
        inactive_img:"https://cdn.iconscout.com/icon/free/png-128/store-175-443119.png",
        backdrop:"E5F3F3",
        active_img:"https://cdn.iconscout.com/icon/premium/png-128-thumb/store-2145338-1803204.png",
    
        
    }
    
    
]; 
const TabOptions = ({activeTab,setActiveTab}) => {
    return(
        <div className='tab-options'>
            <div className="max-width options-wrapper">
             {tabs.map((tab)=>{
                 return(
                  <div onClick={()=>setActiveTab(tab.name)} className={`tab-item absolute-center cur-po ${activeTab===tab.name
                  && "active-tab"}`}>
                      <div className="tab-image-container absolute-center" style={{backgroundColor:
                    `${activeTab===tab.name?tab.backdrop:""}`}}>
                    <img className='tab-image' alt={tab.name} src={activeTab===tab.name?tab.active_img:
                    tab.inactive_img}/>
                      </div>
                      <div className="tab-name">{tab.name}</div>
                  </div>
                 )  
             })}
            </div>
        </div>
    );
}
export default TabOptions;