import React from 'react';

import Home from './HeaderPage';
import FooterPage from './FooterPage';
import './About.css';

import profileImage from './/images/profile.jpg';
import cookImage from './/images/Image.jpg';
import boholImage from './/images/Bohol.jpg';
import carImage from './/images/Car.jpg';
import makaraImage from './/images/Makara.jpg';
import nycImage from './/images/NYC.jpg';
import ruapehuImage from './/images/Ruapehu.jpg';
import seaImage from './/images/Sea.jpg';
import shibuyaImage from './/images/Shibuya.jpg';
import universalImage from './/images/Universal.jpg';

function About() {
    return (
        <div className='bg-black'>
            <Home />            
            <div className='item-body px-60 py-5'>
                <p className='item-body py-5 font-medium text-sky-400/100'>Hello there,<br />
                    I'm an IT enthusiast/programmer currently living in Auckland, New Zealand. I used
                    to live in Wellington, but the bigger city is calling me so here I am 🤷<br />
                    Beyond of the world of programming, I love to explore new places and cultures,
                    which combines my love for traveling with a curiosity of learning.<br />
                    I always seek new adventures in both my career and personal life.
                </p>
            </div>
            <div className='flex justify-center items-center mb-12'>
                <img src={profileImage} className="object-cover opacity-75 rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400" style={{ width: '300px' }} alt='' />
            </div>
            <p className='item-body px-60 font-medium text-sky-400/100'>I've had the privilege of exploring some incredible destinations, each one leveling
                its unique mark on my journey.<br />From breathtaking landscapes to rich cultural experiences, traveling has been
                a source of inspiration and growth for me.<br /> 
                Please enjoy a few of the unforgettable places I've visited.
            </p> 
            <div className='scene'>
                    <div className='imageStyle'>
                        <img style={{ '--i': '000deg' }} src={cookImage} alt="Portfolio project 1" />
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
            <br />
            <FooterPage />
        </div>
    );
};

export default About;