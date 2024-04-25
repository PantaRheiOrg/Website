import React from 'react';
import '../css/section2.css';
import partyImage from '../images/phone2.png';

function Section2() {
  return (
      <div className="section2 d-flex align-items-center justify-content-center">
        <div className="row w-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-90 h-100 d-flex align-items-center justify-content-center">
              <div className='text-center w-50 pt-3'>
                <p className='title2'>heat!</p>
                <p className='subtitle2 w-40'>Unleash your inner thrill-seeker and discover the pulse-pounding epicenters of action-packed excitement!</p>
              </div>            
            </div>         
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden custom-background">
            <div className="w-90 h-50"> 
              <div className='text-center w-75'>
                <img 
                  src={partyImage} 
                  alt="Party" 
                  className="phone-image2" // Add the phone-image class here
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
  );
}

export default Section2;
