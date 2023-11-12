import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className='logo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src='/4l.png' alt='leaf' style={{ width: '50px', marginTop: '20px' }} />
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }} className='heading'>Donate To Plant A Tree!</h2>
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

export default App;
