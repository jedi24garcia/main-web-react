import React from 'react';

import './Portfolio.css';
import consoleImage from './/images/consoles.jpg';

function Portfolio() {
    return (
        <div>
            <header class="flex justify-between items-center p-20 bg-gradient-to-r from-neutral-400 to-gray-500" />
                <div class='item-body px-60 py-20'>
                    <h1 class='font-serif text-5xl'>portfolio</h1>
                </div>
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
        </div>
    );
};

export default Portfolio;