import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-details' >
                <h1>Trejor Skin Care</h1>
                <p>5321NW Torino PKWYPort St Lucie Fl 34986</p>
                <div className='follow'>
                    <h4>Contact us</h4>
                    <a href="https://www.facebook.com/trejorskincare" target="_blank"> <i class="fab fa-facebook fa-2x me-3"></i></a>
                    <a href="https://www.facebook.com/trejorskincare"> <i class="fab fa-instagram fa-2x me-3"></i></a>
                    <a href="https://www.facebook.com/trejorskincare"> <i class="fab fa-twitter fa-2x me-3"></i></a>
                    
                </div>
                <h5 className='copyright'><i class="fas fa-copyright"></i> All rights reserved by Trejor Skin care 2021</h5>
            </div>
        </div>
    );
};

export default Footer;