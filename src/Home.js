import React from 'react';

import './Home.css';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

function Home() {
    return (
        <div>
            <HeaderPage />
                <div className='context flex p-10 bg-black'>
                    <div id="logo" className='item-body px-20'>Welcome!</div>  
                </div>
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
            <FooterPage />
        </div>
    );
};

export default Home;