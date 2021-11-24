import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-us'>
            <div className='about-section'>
                <img src="/img/about.jpg" alt="" />
            </div>
            <div className='owner-section' >
                <h5 className='section-title'>ABOUT THE OWNER</h5>
                <p>Originally from Jamaica, Tamara emigrated to the US in 1988. She struggled with her own skin imperfections which drove her to learn more about skincare, she then realized this was a hidden passion for her. Tamara believes that a healthy lifestyle not only changes your body, it changes your mind, your attitude and your mood. After attaining her Facial Specialist License from Indian River State College in 2017, she decided to pursue her love for Physical Therapy. She is a graduate of the Physical Therapist Assistant Program from Indian River State College in 2020 and has gained valuable experience in both career fields. As the owner and operator of Trejor Skincare, Tamara is responsible for your monthly personal skin care treatments, proper skincare education and prescribing your facial fitness regimen.     </p>
            </div>
            <p className='quote'>“You are beautiful, Trejor the skin you’re in”. Tamara Davis</p>
            <div>
                <h5 className='section-title'>MISSION</h5>
                <p>To ignite your inner confidence and enhance your beauty. Helping others to look beautiful is nice, but helping them to believe they are beautiful is life changing. During your first treatment you may enter feeling like a client but you will leave feeling like a friend.</p>
            </div>
            <div>
                <h5 className='section-title'>EXPECTATIONS</h5>
                <p>Trejor skincare will provide a prompt, positive, professional and personal skin care experience. We provide every client with a free consultation and skin analysis, a review of your past facial health experiences and your current skin problems. Bookings are done by call, text, or clicking on BOOK NOW which will send you to the calendar. Please provide 24hrs notice if there is a need to reschedule. Rest assured you will have the exact experience you were looking for and more.</p>
            </div>
            <div>
                <h5 className='section-title'>Cancellations</h5>
                <p>Appointments changed or cancelled less than 12 hours to scheduled time are subject to a 50% late cancellation fee. Please note that a major credit card or gift certificate number is required to secure your reservation date and time.</p>
            </div>
            <div>
                <h5 className='section-title'>Arrival</h5>
                <p>At Trejor Skincare we pride ourselves on operating a prompt appointment schedule, ensuring that your services with us will not impact the timing of the rest of your day and allowing for you to have the full benefit of your scheduled time. In order to maintain this courtesy for all of our guests, your appointment time will be reduced should you arrive late for an appointment so that your treatment will end as originally scheduled. For your first visit with us, we recommend that you arrive 5-10 minutes early to complete a short form and address any questions or concerns with our staff.</p>
            </div>

        </div>
    );
};

export default About;