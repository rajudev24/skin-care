import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurService.css'
import { bounceIn, fadeInRight, fadeInLeft,fadeInUp, zoomIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounceIn, 'bounce')
    },
    zoomIn: {
        animation: 'x 2s',
      animationName: Radium.keyframes(zoomIn, 'zoom')
    },
    fadeInRight: {
        animation: 'x 2s',
      animationName: Radium.keyframes(fadeInRight, 'fade')
    },
    fadeInLeft: {
        animation: 'x 2s',
      animationName: Radium.keyframes(fadeInLeft, 'fade')
    },
    fadeInUp: {
        animation: 'x 2s',
      animationName: Radium.keyframes(fadeInUp, 'fade')
    },
    
  }
   

const OurService = () => {

    return (
        <StyleRoot>
            <div>
            <Container className='pb-5 mb-5'>
                <Row className='ourService-titile '>
                    <Col>
                        <h2 style={styles.bounce}>Nature gave you beauty, we will make you confident!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className='ourService-titile' >
                        <h3 style={styles.zoomIn}>Explore our services</h3>
                    </Col>
                </Row>

                <Row className='mt-5' >
                    <Col >
                        <div  style={styles.fadeInLeft}  className='imges'><img src="/img/clarifying.jpg" alt="" />
                            <div>
                                <p className='service-name'>CLARIFYING FACIAL </p>
                            </div>
                        </div>

                    </Col>

                    <Col >
                        <div style={styles.fadeInUp} className='imges'><img src="/img/refresher.jpg" alt="" />
                            <div>
                                <p className='service-name' >TROPICAL REFRESHER</p>
                            </div>
                        </div>

                    </Col>

                    <Col >
                        <div style={styles.fadeInRight} className='imges'><img src="/img/foot-detox.jpg" alt="" />
                            <div>
                                <p className='service-name' >FOOT DETOX TREATMENT </p>
                            </div>
                        </div>

                    </Col>

                </Row>

                <Row className='mt-4'>
                    <Col>
                        <div style={styles.fadeInUp} className='imges'><img src="/img/man-facial.jpg" alt="" />
                            <div>
                                <p className='service-name'>GENTELMAN’S FACIAL </p>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div style={styles.fadeInUp} className='imges'><img src="/img/back-facial.jpg" alt="" />
                            <div>
                                <p className='service-name'>BACK FACIAL </p>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div style={styles.fadeInUp} className='imges'><img src="/img/natural-facial.jpg" alt="" />
                            <div>
                                <p className='service-name'>NATURAL FACIAL </p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            
        </div>
        </StyleRoot>

    );
};

export default OurService;