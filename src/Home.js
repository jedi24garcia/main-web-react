import React from 'react';

import './Home.css';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

function Home() {
    return (
        <div>
        <HeaderPage />
            <div className='context flex justify-center items-center p-4 bg-black'>
                <div id="logo" className='item-body px-20 hover:scale-110 transform transition duration-500'>Welcome!</div>  
            </div>
            <div className="border-4 border-cyan border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)] max-w-6xl mx-auto mt-5 p-5">
                <div id="tron-cycle"> 
                <div id="object">
                    <div id="inside-object">
                    <div class="rider head parts"></div>
                    <div class="rider body parts"></div>
                    <div class="rider thigh parts"></div>
                    <div class="rider rider-leg parts"></div>
                    <div class="bike-body parts">
                        <div class="stripe one"></div>
                        <div class="stripe two"></div>
                        <div class="stripe three"></div>
                    </div>
                    <div class="wheel front parts">
                        <div></div>
                    </div>
                    <div class="wheel back parts">
                        <div></div>
                    </div>
                    </div>
                </div>
                <div id="road"></div>
                </div>
                <div className="py-20"></div>
            </div>
            <FooterPage />
        </div>
    );
};

export default Home;