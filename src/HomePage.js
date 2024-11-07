import React from 'react';

import Home from './main';
import FooterPage from './Footer';

import profileImage from './/images/profile.jpg';

function HomePage() {
    return (
        <div>
            <Home />
                <div className='context flex p-10 bg-sky-900'>
                    <img src={profileImage} className="object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400" style={{ width: '400px' }} alt='' /> 
                    <div className='item-body px-20'>  
                        <p className='font-tr2n font-extrabold'>This is my personal website. Please
                            feel free to look around and enjoy! 😊
                        </p>   
                    </div>
                </div>   
            <FooterPage />
        </div>
    );
};

export default HomePage;