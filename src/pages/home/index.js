import React, { useState } from 'react';
import Footer from '../../component/common/footer';
import Header from "../../component/common/header";
import TabOptions from "../../component/common/tabOptions";
import Shop from "../../component/shop";
import Stores from "../../component/stores";
import Customs from "../../component/customs";
const HomePage = () => {
    const [activeTab,setActiveTab]= useState("Home");
    return(
        <div>
         <Header/>
         <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
         {getCorrectScreen(activeTab)}
         <Footer/>
        </div>
    );
}
const getCorrectScreen=(tab)=>
{
    switch(tab){
        case "Home":
            return <Customs/>;
        case "Shop":
            return <Shop/>;
        case "Stores":
            return <Stores/>;
        
         default:
                return <Customs/>; 
    }
};
export default HomePage;