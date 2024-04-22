import React from 'react';
import '../css/section1.css';
import '../css/button.css'
import partyImage from '../images/phone.png';

function Section1() {
  return (
    <div className="section d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-50'>
              <p className='title'>THE free PARTY APP</p>
              <p className='subtitle w-100'>Get a free drink to start the night every time you explore with PNTA.</p>
              <div className="d-flex justify-content-end">
                <button className="funny-btn">Get App</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden">
          <div className="w-90 h-50 position-relative">
            <div className='text-center w-75'>
              <img src={partyImage} alt="Party" className="phone-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
