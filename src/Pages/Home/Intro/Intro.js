import React from 'react';
import './Intro.css'
import { bounceIn, fadeInUp, zoomIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    zoomIn: {
        animation: 'x 2s',
      animationName: Radium.keyframes(zoomIn, 'zoom')
    },
    bounceIn: {
        animation: 'x 2s',
      animationName: Radium.keyframes(bounceIn, 'fade')
    },
    
    fadeInUp: {
        animation: 'x 2s',
      animationName: Radium.keyframes(fadeInUp, 'fade')
    },
    
  }
  
const Intro = () => {
    return (
        <StyleRoot>
            <div className='intro-section'>
            <div className='intro-details'>
            <h2 style={styles.zoomIn}>WELCOME TO TREJOR SKIN CARE </h2>
            <h1 style={styles.bounceIn}>Revitalise your mind, body and spirit with the Trejor Skin Care treatments</h1>
            <p style={styles.bounceIn}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <button style={styles.fadeInUp} className='intro-btn'>MORE ABOUT US</button>
        </div>
        </div>
        </StyleRoot>
    );
};

export default Intro;