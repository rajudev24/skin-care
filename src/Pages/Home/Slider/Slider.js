import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './Slider.css'
 
const Slider = () => {
    const navigate = useNavigate();
    const handleTreatmentButton = ()=>{
        navigate('/treatments')
    }
    const handleFallButton = () =>{
        navigate('/fall')
    }
    const handletWinterButton = ()=>{
        navigate('/winter')
    }
    return (
        <Container fluid className='slider-section'>
            <Container >
            < Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../img/IMG_5936.jpg"
                        
                        alt="First slide"
                    />
                    <Carousel.Caption className='slide-details'>
                        <h3>Get Your Skin Treatments</h3>
                        <p>Skin care is like dieting. You have to invest time and effort. There is no instant miracle cure.</p>
                        <button onClick={handleTreatmentButton} className='slid-btn'>View More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../img/IMG_5934.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='slide-details'>
                        <h3>Fall Skin Care</h3>
                        <p>Take good care of your skin and hydrate. If you have good skin, everything else will fall into place.</p>
                        <button onClick={handleFallButton} className='slid-btn'>View More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../img/IMG_5937.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='slide-details'>
                        <h3>Winter Skin Care</h3>
                        <p>Nature gives you the face you have at twenty; it is up to you to merit the face you have at fifty.</p>
                        <button onClick={handletWinterButton} className='slid-btn'>View More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        </Container>
    );
};

export default Slider;