import React from 'react';
import './Gallery.css'
const Gallery = () => {
    return (
        <div className='gallery-title'>
            <div >
            <h3>Photo</h3>
            <h1>GALLERY</h1>
            </div>

            <div className='gallery-img'>
                <div className='image'>
                    <img src="https://i.ibb.co/WnC92my/pexels-polina-tankilevitch-3738340.jpg" alt="" />
                </div>
                <div className='image'>

                    <img src="https://i.ibb.co/23sp09K/pexels-cottonbro-3997981.jpg" alt="" />
                </div>
                <div className='image'>
                    <img src="https://i.ibb.co/YPHMmb6/pexels-arina-krasnikova-6663373.jpg" alt="" />
                </div>
                <div className='image'>
                    <img src="https://i.ibb.co/Vtkhnb9/pexels-monstera-6977604.jpg" alt="" />
                </div>
                <div className='image'>
                    <img src="https://i.ibb.co/bN3X7nd/pexels-polina-kovaleva-5927890.jpg" alt="" />
                </div>
                <div className='image'>
                    <img src="https://i.ibb.co/smmddh1/pexels-breakingpic-3192.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;