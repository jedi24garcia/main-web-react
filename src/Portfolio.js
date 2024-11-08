import React from 'react';

import Home from './main';
import FooterPage from './Footer';

import './Portfolio.css';
import consoleImage from './/images/consoles.jpg';
import aboutImage from './/images/Image.jpg';
import boholImage from './/images/Bohol.jpg';
import carImage from './/images/Car.jpg';
import makaraImage from './/images/Makara.jpg';
import nycImage from './/images/NYC.jpg';
import ruapehuImage from './/images/Ruapehu.jpg';
import seaImage from './/images/Sea.jpg';
import shibuyaImage from './/images/Shibuya.jpg';
import universalImage from './/images/Universal.jpg';
import firstProject from './/images/mainbg.webp';

function Portfolio() {
    return (
        <div className='bg-sky-900'>
            <Home />
            <div className='item-body px-60 py-10'>
                <h1 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>portfolio</h1>
            </div>
                <p className='item-body px-60 font-tr2n font-extrabold'>I've had the privilege of exploring some incredible destinations, each one leveling<br />
                its unique mark on my journey. From breathtaking landscapes to rich cultural experiences, traveling has been<br />
                a source of inspiration and growth for me. Please enjoy a few of the unforgettable places I've visited.
                </p> 
                <div className='scene'>
                    <div className='imageStyle'>
                        <img style={{ '--i': '000deg' }} src={aboutImage} alt="Portfolio project 1" />
                        <img style={{ '--i': '040deg' }} src={boholImage} alt="Portfolio project 2" />
                        <img style={{ '--i': '080deg' }} src={carImage} alt="Portfolio project 3" />
                        <img style={{ '--i': '120deg' }} src={makaraImage} alt="Portfolio project 4" />
                        <img style={{ '--i': '160deg' }} src={nycImage} alt="Portfolio project 5" />
                        <img style={{ '--i': '200deg' }} src={ruapehuImage} alt="Portfolio project 6" />
                        <img style={{ '--i': '240deg' }} src={seaImage} alt="Portfolio project 7" />
                        <img style={{ '--i': '280deg' }} src={shibuyaImage} alt="Portfolio project 8" />
                        <img style={{ '--i': '320deg' }} src={universalImage} alt="Portfolio project 9" />
                    </div>
                </div>
                <div className='item-body px-60 py-10'>
                    <h1 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>projects</h1>
                </div>
                <p className='item-body px-60 font-tr2n font-extrabold'>Below are some of my personal projects, each reflecting my passion for creativity<br />
                and coding. From web applications to mobile development, these projects showcase my journey through the world of<br />
                technology. Take a moment to explore, dive into details, and enjoy the work that reflects my creativity as a developer.<br />
                </p>
                <div className='flex justify-between px-60 py-10'>
                    <section className='item-body w-1/2 px-5'>
                        <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Project 1</h2>
                        <a href='https://github.com/jedi24garcia/Fitness-App/tree/master' rel=''>
                            <img src={firstProject} className="object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400" alt='' />
                        </a>
                        <p className='py-10 font-tr2n font-extrabold'>This is a mobile application to guide individuals who are just starting out at the gym!</p>
                    </section>
                    <section className='item-body w-1/2 px-5'>
                        <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Project 2</h2>
                        <img src={consoleImage} className="object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400" alt='' />
                    </section>
                </div>
            <FooterPage />
        </div>
    );
};

export default Portfolio;