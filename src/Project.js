import React from 'react';

import Home from './HeaderPage';
import FooterPage from './FooterPage';

import pacificImage from './/images/pacific.JPG';
import firstProject from './/images/mainbg.webp';
import schoolImage from './/images/school.jpg';

function Project() {
    return (
        <div className='bg-black'>
            <Home />
            <div className="px-6 py-5 text-center">
                <p className='item-body px-60 font-medium text-sky-400/100'>Below are some of my personal projects, each reflecting my passion for creativity
                and coding.<br />From web applications to mobile development, these projects showcase my journey through the world of
                technology.<br />Take a moment to explore, dive into details, and enjoy the work that reflects my creativity as a developer.<br />
                </p>
            </div>
            <br />
            <div className='flex justify-between px-60 py-10'>
                <section className='item-body w-1/2 px-5'>
                    <h2 className='mb-4 text-2xl tracking-tight font-tr2n text-gray-900 text-center text-sky-400/100'>FitnessMate App</h2>
                    <a href='https://github.com/jedi24garcia/Fitness-App/tree/master' rel=''>
                        <img src={firstProject} className="w-full aspect-video object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400 border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]" alt='' />
                    </a>
                    <p className='py-10 text-center font-medium text-sky-400/100'>This is a mobile application using React-Native to guide individuals who are just starting out at the gym!</p>
                </section>
                <section className='item-body w-1/2 px-5'>
                    <h2 className='mb-4 text-2xl tracking-tight font-tr2n text-gray-900 text-center  text-sky-400/100'>Pacifica Project</h2>
                    <a href='https://github.com/jedi24garcia/Pacifica_Project' rel=''>
                        <img src={pacificImage} className="w-full aspect-video object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400 border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]" alt='' />
                    </a>
                    <p className='py-10 text-center font-medium text-sky-400/100'>Serves as a comprehensive educational and research tool that enables users to survey, comprehend, and understands the cultural heritage customs, and etiquette of Pacific Culture.</p>
                </section>
                <section className='item-body w-1/2 px-5'>
                    <h2 className='mb-4 text-2xl tracking-tight font-tr2n text-gray-900 text-center  text-sky-400/100'>School Database</h2>
                    <a href='https://github.com/jedi24garcia/School_Database/blob/master/main.py' rel=''>
                        <img src={schoolImage} className="w-full aspect-video object-cover rounded-lg hover:scale-110 transform transition duration-500 border-4 border-cyan-400 border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]" alt='' />
                    </a>
                    <p className='py-10 text-center font-medium text-sky-400/100'>Designed and developed a menu driven console-based Python application.
                    </p>
                </section>
            </div>
            <FooterPage />
        </div>
    );
};

export default Project;