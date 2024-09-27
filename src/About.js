import React from 'react';

function About() {
    return (
        <div>
            <header class="flex justify-between items-center p-20 bg-gradient-to-r from-neutral-400 to-gray-500">
                <h1>About</h1>
            </header>
            <div class='item-body px-20 py-60'>
                <p class='font-serif'>"Lorem ipsum dolor sit amet,<br />
                    consectetur adipiscing elit, sed do eiusmod tempor<br /> 
                    incididunt ut labore et dolore magna aliqua. Ut enim<br /> 
                    ad minim veniam, quis nostrud exercitation ullamco<br /> 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br /> 
                    irure dolor in reprehenderit in voluptate velit esse cillum<br /> 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat<br /> 
                    non proident, sunt in culpa qui officia deserunt mollit anim id<br /> 
                    est laborum."
                </p>
            </div>
            <footer class="flex justify-between items-center p-20 bg-gradient-to-r from-neutral-400 to-gray-500">
            </footer>    
        </div>
    );
};

export default About;