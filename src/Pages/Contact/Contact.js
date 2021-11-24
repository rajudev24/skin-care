import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-img'>
                <img src="/img/contact.jpg" alt="" />
            </div>
            <div className='contact-details'>
                <h2>CONTACT US</h2>
                <p>Helping others to look beautiful is nice, but helping them to believe they are beautiful is life changing.</p>
            </div>
            <div>
                <h2 className='text-center'>Location</h2>
                <p className='text-center'>
                    Welcome to Trejor Skin Care located adjunct to Island Girlz Beauty Bar at 5321NW Torino PKWYPort St Lucie Fl 34986. We are specifically located on the corner of Beauty Blvd and Lovely Ln in the Torino Plaza Shopping Center.
                </p>
            </div>

            <div className='text-center mb-5'>
                <iframe title='Google maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.2372407153593!2d-80.39142778562346!3d27.368305346918085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88deed0d90d6f7af%3A0xf2004ce039a32ed!2sTorino%20Plaza!5e0!3m2!1sen!2sbd!4v1636449498186!5m2!1sen!2sbd" width="600" height="400" allowfullscreen="" loading="lazy"></iframe>
            </div>

        </div>
    );
};

export default Contact;