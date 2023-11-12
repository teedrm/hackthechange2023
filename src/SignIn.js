import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SignIn = () => {
    const navigate = useNavigate();

    return (
        <div>
        <ArrowBackIosIcon style={{marginTop:'10px', marginLeft:'10px'}} onClick={()=> navigate('/')}/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{fontSize:'1.3rem'}}>Enter Your Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '95%' }}>
                    <label style={{ display: 'flex', flexDirection: 'column', }}>
                        Name
                        <input type='text' />
                    </label>

                    <label style={{ display: 'flex', flexDirection: 'column', }}>
                        Email
                        <input type='email' />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', }}>
                        Card Number
                        <input type='text' />
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        <label style={{ display: 'flex', flexDirection: 'column', }}>

                            <input type='text' placeholder='MM/YY' />
                        </label>
                        <label>
                            <input type='text' style={{ width: '30px' }} placeholder='CVV' />
                        </label>
                    </div>
                </div>
                <button className='submit-btn' onClick={() => navigate('/thankyou')} >Submit</button>
            </div>
        </div>
    );
};

export default SignIn;
