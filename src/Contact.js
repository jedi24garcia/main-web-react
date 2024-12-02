import React from 'react';

import Home from './main';
import FooterPage from './Footer';

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('formspree here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
    });
      
    if (response.ok) {
        alert('Form Submitted');
    } else {
        alert('Failed to submit form');
    }
    
    return (       
        <div className='bg-sky-900'>
            <Home />            
            <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                <form action='#' className='space-y-8' onSubmit={handleSubmit} method="POST">
                    <div>
                        <label for="name" class="block mb-2 font-tr2n font-extrabold">Name</label>
                        <input type="name" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 font-tr2n font-extrabold">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="sample@gmail.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" class="block mb-2 font-tr2n font-extrabold">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#003366] sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-darkBlue dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
                </form>
            </div>
            <FooterPage />
        </div>
    );
};

export default Contact;