import React from 'react';

import Home from './HeaderPage';
import FooterPage from './FooterPage';

import consoleImage from './/images/consoles.jpg';
import firstProject from './/images/mainbg.webp';

function Project() {
    return (
        <div className='bg-black'>
            <Home />
            <p className='item-body px-60 font-tr2n text-sky-400/100'>Below are some of my personal projects, each reflecting my passion for creativity<br />
            and coding. From web applications to mobile development, these projects showcase my journey through the world of<br />
            technology. Take a moment to explore, dive into details, and enjoy the work that reflects my creativity as a developer.<br />
            </p>
            <div className='flex justify-between px-60 py-10'>
                <section className='item-body w-1/2 px-5'>
                    <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>FitnessMate App</h2>
                    <a href='https://github.com/jedi24garcia/Fitness-App/tree/master' rel=''>
                        <img src={firstProject} className="w-full aspect-video object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400" alt='' />
                    </a>
                    <p className='py-10 font-tr2n text-sky-400/100'>This is a mobile application using React-Native to guide individuals who are just starting out at the gym!</p>
                </section>
                <section className='item-body w-1/2 px-5'>
                    <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Robotech</h2>
                    <a href='https://github.com/jedi24garcia/robotech/blob/master/airobo/self.py' rel=''>
                        <img src={consoleImage} className="w-full aspect-video object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400" alt='' />
                    </a>
                    <p className='py-10 font-tr2n text-sky-400/100'>A Python program that lets the user use their voice to open a web browser using Speech-Recognition. When a user say something like 'open Google' or 'open Youtube,' it listens, recognizes the command, and opens up the browser to the website they've asked for. It is still a work
                        in progress.
                    </p>
                </section>
                <section className='item-body w-1/2 px-5'>
                    <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>School_Database</h2>
                    <a href='https://github.com/jedi24garcia/School_Database' rel=''>
                        <img src={consoleImage} className="w-full aspect-video object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400" alt='' />
                    </a>
                    <p className='py-10 font-tr2n text-sky-400/100'>Designed and developed a menu driven console-based Python application.
                    </p>
                </section>
            </div>
            <FooterPage />
        </div>
    );
};

export default Project;