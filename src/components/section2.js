import React from 'react';
import '../css/section2.css';
import partyImage from '../images/phone2.png';
import texts from '../text/texts.json'; // Import JSON file

function Section2({ language }) { 
  return (
    <div className="section2 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className="text-center w-50 pt-3">
              <p className="title2">{texts.section2Title[language]}</p>
              <p className="subtitle2 w-40">{texts.section2Subtitle[language]}</p> 
            </div>            
          </div>         
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden custom-background">
          <div className="w-90 h-50"> 
            <div className="text-center w-75">
              <img 
                src={partyImage} 
                alt="Party" 
                className="phone-image2" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
