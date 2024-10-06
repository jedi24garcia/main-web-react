import React from 'react';

import Home from './main';
import FooterPage from './Footer';

import './Portfolio.css';
import consoleImage from './/images/consoles.jpg';
import aboutImage from './/images/Image.jpg';

function Portfolio() {
    return (
        <div className='bg-gradient-to-r from-purple-900 to-purple-500'>
            <Home />
            <div className='item-body px-60 py-10'>
                <h1 className='font-serif text-5xl'>portfolio</h1>
            </div>
                <p className='item-body px-60'>I've had the privilege of exploring some incredible destinations, each one leveling<br />
                its unique mark on my journey. From breathtaking landscapes to rich cultural experiences, traveling has been<br />
                a source of inspiration and growth for me. Please enjoy a few of the unforgettable places I've visited.
                </p> 
                <div className='scene'>
                    <div className='imageStyle'>
                        <img style={{ '--i': '000deg' }} src={aboutImage} alt="Portfolio project 1" />
                        <img style={{ '--i': '040deg' }} src={consoleImage} alt="Portfolio project 2" />
                        <img style={{ '--i': '080deg' }} src={aboutImage} alt="Portfolio project 3" />
                        <img style={{ '--i': '120deg' }} src={consoleImage} alt="Portfolio project 4" />
                        <img style={{ '--i': '160deg' }} src={aboutImage} alt="Portfolio project 5" />
                        <img style={{ '--i': '200deg' }} src={consoleImage} alt="Portfolio project 6" />
                        <img style={{ '--i': '240deg' }} src={aboutImage} alt="Portfolio project 7" />
                        <img style={{ '--i': '280deg' }} src={consoleImage} alt="Portfolio project 8" />
                        <img style={{ '--i': '320deg' }} src={aboutImage} alt="Portfolio project 9" />
                    </div>
                </div>
                <div className='item-body px-60 py-10'>
                    <h1 className='font-serif text-5xl'>projects</h1>
                </div>
                <p className='item-body px-60'>Below are some of my personal projects, each reflecting my passion for creativity<br />
                and coding. From web applications to mobile development, these projects showcase my journey through the world of<br />
                technology. Take a moment to explore, dive into details, and enjoy the work that reflects my creativity as a developer.<br />
                </p>
                <div className='flex justify-between px-60 py-10'>
                    <section className='item-body w-1/2 px-5'>
                        <h2>Project 1</h2>
                        <img src={consoleImage} className="object-cover rounded-lg hover:scale-110 transform transition duration-500" alt='' />
                    </section>
                    <section className='item-body w-1/2 px-5'>
                        <h2>Project 2</h2>
                        <img src={consoleImage} className="object-cover rounded-lg hover:scale-110 transform transition duration-500" alt='' />
                    </section>
                </div>
            <FooterPage />
        </div>
    );
};

export default Portfolio;