import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import Home from './HeaderPage';
import FooterPage from './FooterPage';

function ContactForm() {
    const [state, handleSubmit] = useForm('mdkovypl');
    if (state.succeeded) {
        return <p>Thanks for the email. I will get back to you as soon as possible!</p>;
    }

    return (
        <div className="bg-black">
            <Home />
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-8xl tracking-tight font-tr2n font-extrabold text-center text-gray-900 text-sky-400/100">Contact Me</h2>
                <form className="space-y-8" onSubmit={handleSubmit} method="POST">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-2xl font-tr2n font-extrabold text-sky-400/100">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="Full Name" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-2xl font-tr2n text-sky-400/100">Your email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="sample@gmail.com" 
                            required 
                        />
                    </div>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-2xl font-tr2n text-sky-400/100">Your message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="6" 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="Leave a comment..." 
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#003366] sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-darkBlue dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                        disabled={state.submitting}
                    >
                        Send message
                    </button>
                </form>
            </div>
            <FooterPage />
        </div>
    );
};

export default ContactForm;