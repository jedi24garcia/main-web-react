import React from 'react';

import Home from './main';
import FooterPage from './Footer';

import profileImage from './/images/profile.jpg';

function HomePage() {
    return (
        <div>
            <Home />
                <div className='context flex p-10 bg-black'>
                    <img src={profileImage} className="object-cover rounded-lg hover:scale-110 transform transition duration-500" style={{ width: '400px' }} alt='' /> 
                    <div className='item-body px-20'>  
                        <p className='font-tr2n text-sky-400/100'><b>&lt;</b> This is my personal website. Please feel free to look around and enjoy! 😊 <b>&gt;</b></p>   
                    </div>
                </div>   
            <FooterPage />
        </div>
    );
};

export default HomePage;