import React from 'react';
import "./header.css";

const Header=()=>{
    return(
        <div className='max-width header'>
         <img src="logo.png" alt="Craftsya" className="header-logo"/>
         <div className='header-right'>
             <div className='header-location-search'>
             <div className='location-wrapper'>
                 <div className='location-icon-name'>
                 <i className="fi fi-rr-marker absolute-center location-icon" ></i>
                 <div>Lucknow</div>
                 </div>
                 <i className="fi fi-rr-caret-down absolute-center down-button"></i>
             </div>
             <div className="location-search-separator">

             </div>
             <div className="header-searchbar">
             <i className="fi fi-rr-search absolute center search-icon"></i>
             <input placeholder='Search for Items'className='search-input'/>
             </div>
         </div>
         <div className='profile-wrapper'>
         <i className="fi fi-ss-user header-profile-image"></i>
            <span className='header-username'>SP</span>
            <i class="fi fi-rr-caret-down absolute-center profile-options-icon"></i>
         </div>
        </div>
        </div>
    );
}
export default Header;