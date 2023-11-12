import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Homepage() {
  const navigate = useNavigate();
  return (
    <div >
      <div className='logo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='/4l.png' alt='leaf' style={{ width: '50px', marginTop: '20px' }} />
      </div>
      <div style={{ width: '90%', marginLeft: '20px', marginTop: "-20px" }}>
        <h2 className='heading'>Growing Better Places to Live</h2>
        <p>Tree is the only national non-profit organization dedicated to planting and nurturing trees in rural and urban environments, in every province across the country.</p>
      </div>
      <div>
        {/* <h2 style={{ textAlign: 'center' }} className='heading'>Donate To Plant A Tree!</h2> */}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src='/123.gif' alt='plant' style={{ width: '300px', }} />
        <button className='donate-btn' >DONATE</button>

        {/* Transparent Circle with Black Border */}
        <div className='transparent-circle'></div>
      </div>

    </div>
  );
}

export default Homepage;
