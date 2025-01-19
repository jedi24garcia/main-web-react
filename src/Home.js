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
                    {/* <div className='item-body px-20'>  
                        <p className='font-tr2n text-sky-400/100'><b>&lt;</b> This is my personal website. Please feel free to look around and enjoy! 😊 <b>&gt;</b></p>   
                    </div> */}
                    <div id="logo" className='item-body px-20'>Welcome!</div>
                </div>
                <div id="screen-container">
                    <canvas id="canvas"></canvas>
                    
                    <div class="blue cyclotron"></div>
                    <div class="skyblue cyclotron"></div>
                    <div class="greetings">Hello, User!</div>
                
                </div>   
            <FooterPage />
        </div>
    );
};

export default Home;