import React from 'react';
import '../css/section4.css';
import partyImage from '../images/phone.png';

function Section4() {
  return (
      <div className="section4 d-flex align-items-center justify-content-center">
       <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="w-90 h-100 d-flex align-items-center justify-content-center">
                <div className='text-center w-50 pt-3'>
                  <p className='title4'>Mystery</p>
                  <p className='subtitle4 w-40'> Take photos during the night, even when you've had a few drinks, and discover them the next day with our exclusive Night Capture feature!</p>
                </div>            
              </div>         
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden custom-background2">
              <div className="w-90 h-100">
                <div className='text-center w-75 pptt ppbb'>
                  <img 
                    src={partyImage} 
                    alt="Party" 
                    className="phone-image4" 
                  />
                </div>
              </div>
          </div>
       </div>
      </div>
  );
}

export default Section4;