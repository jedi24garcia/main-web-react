import React, { useEffect } from 'react';

import './Home.css';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

import profileImage from './/images/profile.jpg';

function Home() {
    useEffect(() => {
        let canvas = document.querySelector('#canvas');
        let content = canvas.getContext('2d');
        canvas.width = window.innerWidth * 5;
        canvas.height = window.innerHeight;

        let gridX = {
            color: '#38bdf8',
            x: 0,
            y: 0,
            sep: 100, // spacing between lines
            update: function() {
                if (this.x < canvas.width)
                    this.x += 2;
            },
            drawLine: function(x, y) {
                content.beginPath();
                content.strokeStyle = this.color;
                content.moveTo(x, y);
                content.lineTo(x + 20, y);
                content.stroke();
            },
            draw: function() {
                for (let y = 0; y <canvas.height; y= y + this.sep) {
                    this.drawLine(this.x, y);
                }
            },
        };

        function update() {
            // ctx.clearReact(0, 0, canvas.width, canvas.height); // clears the canvas
            gridX.update();
            gridX.draw();
        }

        let animationFrameID;
        function loop() {
            animationFrameID = requestAnimationFrame(loop);
            update();
        }

        loop();

        return () => {
            cancelAnimationFrame(animationFrameID);
        };
    }, []); 

    return (
        <div>
            <HeaderPage />
                <div className='context flex p-10 bg-black'>
                    <img src={profileImage} className="object-cover rounded-full hover:scale-110 transform transition duration-500" style={{ width: '400px' }} alt='' /> 
                    <div id="logo" className='item-body px-20'>Welcome!</div>
                </div>
                <div id="screen-container">
                    <canvas id="canvas"></canvas>
                    <div class="blue cyclotron"></div>
                    <div class="skyblue cyclotron"></div>
                    <div class="greetings">Hello, User!</div>
                </div>   
            <FooterPage />
        </div>
    );
};

export default Home;