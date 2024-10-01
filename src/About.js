import React from 'react';

import consoleImage from './/images/consoles.jpg';

function About() {
    return (
        <div>
            <header class="flex justify-between items-center p-20 bg-gradient-to-r from-neutral-400 to-gray-500" />
            <div class='item-body px-60 py-20'>
                <h1 class='font-serif text-5xl'>about</h1>
                <p class='item-body py-5'>Hello there,<br />
                    Just a dedicated programmer living in Wellington, New Zealand.<br />
                    Beyond of the world of coding, I love to explore new places and cultures,<br />
                    which combines my love for traveling with a curiosity of learning.<br />
                    I always seek new adventures in both my career and personal life.
                </p>
            </div>
            <div class='flex justify-center items-center pt-12'>
                <img src={consoleImage} alt='' />
            </div>
            <div>
                <img class='h-48 px-20 py-10' src={consoleImage} alt='' />
            </div>
        </div>
    );
};

export default About;