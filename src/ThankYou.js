import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
                <div className='thankyou-card'>
                    <h3>Thank you for your donation!</h3>
                    <p>We sent you the receipt at name@email.com!</p>

                    <p>Your plant number</p>
                    <p className='plant-number'> 12345</p>
                    <img src='/plant.gif' alt='plant' style={{ width: '200px' }} />
                </div>
                <button className='donate2-btn' onClick={() => navigate('/')}>Back To Homepage</button>
            </div>
        </div>
    )
}

export default ThankYou
