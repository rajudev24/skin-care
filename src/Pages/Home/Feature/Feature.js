import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Feature.css'

const Feature = () => {
    return (
        <div className='feature-section'>
            <div className='feature-details'>
                <div className='ferute-text'>
                    <h1>Premium, quality & comfort</h1>
                    <h6>PREMIUM SKIN CARE SERVICE</h6>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                </div>
            </div>
            <div className='feature-img'>
                <img src="/img/feature.jpg" alt="" />
            </div>
        </div> 
    );
};

export default Feature;