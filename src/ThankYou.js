import React from 'react'

const ThankYou = () => {
    return (
        <div>
            <div>
                <div className='thankyou-card'>
                    <h3>Thank you for your donation!</h3>
                    <p>We sent you the receipt at name@email.com!</p>
                    <img src='/plant.gif' alt='plant' style={{ width: '200px' }} />
                </div>
            </div>
        </div>
    )
}

export default ThankYou
