import React from 'react';

import Home from './main';
import FooterPage from './Footer';

import './Portfolio.css';
import consoleImage from './/images/consoles.jpg';

function Portfolio() {
    return (
        <div>
            <Home />
            <div class='item-body px-60 py-10'>
                <h1 class='font-serif text-5xl'>portfolio</h1>
            </div>
                <p class='item-body px-60'>I've had the privilege of exploring some incredible destinations, each one leveling<br />
                its unique mark on my journey. From breathtaking landscapes to rich cultural experiences, traveling has been<br />
                a source of inspiration and growth for me. Please enjoy a few of the unforgettable places I've visited.
                </p> 
                <div class='scene'>
                    <div class='imageStyle'>
                        <img style={{ '--i': '000deg' }} src={consoleImage} alt="Portfolio project 1" />
                        <img style={{ '--i': '040deg' }} src={consoleImage} alt="Portfolio project 2" />
                        <img style={{ '--i': '080deg' }} src={consoleImage} alt="Portfolio project 3" />
                        <img style={{ '--i': '120deg' }} src={consoleImage} alt="Portfolio project 4" />
                        <img style={{ '--i': '160deg' }} src={consoleImage} alt="Portfolio project 5" />
                        <img style={{ '--i': '200deg' }} src={consoleImage} alt="Portfolio project 6" />
                        <img style={{ '--i': '240deg' }} src={consoleImage} alt="Portfolio project 7" />
                        <img style={{ '--i': '280deg' }} src={consoleImage} alt="Portfolio project 8" />
                        <img style={{ '--i': '320deg' }} src={consoleImage} alt="Portfolio project 9" />
                    </div>
                </div>
            <FooterPage />
        </div>
    );
};

export default Portfolio;