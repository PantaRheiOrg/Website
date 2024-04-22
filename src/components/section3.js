import React from 'react';
import '../css/section3.css';
import installImage from '../images/install.png';
import accountImage from '../images/account.png';
import drinkImage from '../images/drink.png';
import funImage from '../images/fun.png';

function Section3() {
  const imageSize = '190px'; // Set the size for the images

  return (
    <div className="section3 d-flex flex-column align-items-center justify-content-center pptt">
      <h2 className="title3 pt-6">Guide</h2>
      <div className="row w-75 pptt2 ppbb">
        <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-100 '>
            <p className='p311'>1</p>
              <img src={installImage} alt="Install" style={{  height: imageSize ,height: imageSize, padding: '20px 0'}} />
              <p className='p31'>Install the app</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-75'>
            <p className='p321'>2</p>
              <img src={accountImage} alt="Account" style={{ width: imageSize, height: imageSize }} />
              <p className='p32'>Sign up</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-75'>
            <p className='p331'> 3</p>
              <img src={drinkImage} alt="Drink" style={{ width: imageSize, height: imageSize }} />
              <p className='p33'>Free drink</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-75'>
            <p className='p341'>4</p>
              <img src={funImage} alt="Fun" style={{ width: imageSize, height: imageSize }} />
              <p className='p34'>Have fun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
