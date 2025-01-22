import React from 'react';

import './Home.css';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

import profileImage from './/images/profile.jpg';

function Home() {
    return (
        <div>
            <HeaderPage />
                <div className='context flex p-10 bg-black'>
                    <img src={profileImage} className="object-cover rounded-full hover:scale-110 transform transition duration-500" style={{ width: '400px' }} alt='' /> 
                    <div id="logo" className='item-body px-20'>Welcome!</div>  
                </div>
            <FooterPage />
        </div>
    );
};

export default Home;