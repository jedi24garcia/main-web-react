import React from 'react';

import Home from './main';
import FooterPage from './Footer';

function Contact() {
    return (
        <div>
            <Home />            
            <div class='item-body px-60 py-20'>
                <p class='font-serif'>
                    Contact Details:<br />
                    sample@gmail.com<br />
                    022 444 5555
                </p>
            </div>
            <FooterPage />
        </div>
    );
};

export default Contact;