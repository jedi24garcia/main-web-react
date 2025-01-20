import React, { useEffect } from 'react';

import './Home.css';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

import profileImage from './/images/profile.jpg';

function Home() {
    useEffect(() => {
        let canvas = document.querySelector('#canvas');
        let content = canvas.getContext('2d');
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight;

        let gridY = {
            color: '#38bdf8',
            x: window.innerHeight,
            y: window.innerWidth / 2,
            sep: 150,
            update: function () {
                if (this.y > 0)
                    this.y -= 1;
            },
            drawLine: function(x, y) {
                content.beginPath();
                content.strokeStyle = this.color;
                content.moveTo(x, y);
                content.lineTo(x, y-1); 
                content.stroke();
            },
            draw: function () {
                // grid lines Y
                for (let x = 0; x < canvas.width; x= x + this.sep) {
                    this.drawLine(x, this.y);
                }
            },
        };

        let gridX = {
            color: '#38bdf8',
            x: 0,
            y: 0,
            sep: 75,
            update: function() {
                if (this.x < canvas.width)
                    this.x += 2;
            },
            drawLine: function(x, y) {
                content.beginPath();
                content.strokeStyle = this.color;
                content.moveTo(x, y);
                content.lineTo(x + 2, y);
                content.stroke();
            },
            draw: function() {
                // grid lines X
                for (let y = 0; y <canvas.height; y= y + this.sep) {
                    this.drawLine(this.x, y);
                }
            },
        };

        function update() {
            // ctx.clearReact(0, 0, canvas.width, canvas.height); // clears the canvas
            gridY.update();
            gridY.draw();
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
                {/* <div className='context flex p-10 bg-black'>
                    <img src={profileImage} className="object-cover rounded-full hover:scale-110 transform transition duration-500" style={{ width: '400px' }} alt='' /> 
                    <div id="logo" className='item-body px-20'>Welcome!</div>
                </div> */}
                <div id="screen-container">
                    <canvas id="canvas"></canvas>
                    <div className='context flex p-10 bg-black'>
                        <img src={profileImage} className="object-cover rounded-full hover:scale-110 transform transition duration-500" style={{ width: '400px' }} alt='' /> 
                        <div id="logo" className='item-body px-20'>Welcome!</div>
                    </div>
                    <div class="blue cyclotron"></div>
                    <div class="skyblue cyclotron"></div>
                    <div class="greetings">Hello, User!</div>
                </div>   
            <FooterPage />
        </div>
    );
};

export default Home;