import React, { useEffect, useRef, useState } from 'react';
import '../css/section1.css';
import '../css/button.css';
import partyImage from '../images/phone.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import dkFlag from '../images/denmark-flag.png';
import ukFlag from '../images/uk-flag.png';
import texts from '../text/texts.json'; 
import SpotLight from '../components/spotlight';
import SpotLight2 from '../components/spotlight2';
import SpotLight3 from '../components/spotlight3';
import SpotLight4 from '../components/spotlight4';
import SpotLight5 from '../components/spotlight5';
import SpotLight6 from '../components/spotlight6';

function Section1({ language,handleLanguageChange }) { // Receive language prop
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [renderSpotLight, setRenderSpotLight] = useState(false);
  const [renderSpotLight2, setRenderSpotLight2] = useState(false);
  const [renderSpotLight3, setRenderSpotLight3] = useState(false);
  const [renderSpotLight4, setRenderSpotLight4] = useState(false);
  const [renderSpotLight5, setRenderSpotLight5] = useState(false);
  const [renderSpotLight6, setRenderSpotLight6] = useState(false);
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setRenderSpotLight(true);
    }, 1000);

    const timeout2 = setTimeout(() => {
      setRenderSpotLight2(true);
    }, 2000);
    const timeout3 = setTimeout(() => {
      setRenderSpotLight3(true);
    }, 3000);

    const timeout4 = setTimeout(() => {
      setRenderSpotLight4(true);
    }, 4000);
    const timeout5 = setTimeout(() => {
      setRenderSpotLight5(true);
    }, 5000);
    const timeout6 = setTimeout(() => {
      setRenderSpotLight6(true);
    }, 6000);
    
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            leftColumn.classList.add('slide-in-left');
            rightColumn.classList.add('slide-in-right');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(leftColumn);
    observer.observe(rightColumn);

    return () => {
      observer.unobserve(leftColumn);
      observer.unobserve(rightColumn);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
    };
  }, []);

  const handleHover = () => {
    const title = document.querySelector('.title');
    title.classList.toggle('glow');
  };

  return (
    <div>
        <div className="language-slider">
          <span  className="flag-link" onClick={() => handleLanguageChange('da')}><img src={dkFlag} alt="Danish Flag"/></span>
          <span className="flag-link" onClick={() => handleLanguageChange('en')}><img src={ukFlag} alt="UK Flag"/></span>
        </div>
        <div>
      
              {renderSpotLight && (
                <div className="spotlight-animation" style={{ position: 'absolute', top: '0px', left: '-55px' }}>
                  <SpotLight/>
                </div>
              )}
              {renderSpotLight2 && (
                <div className="spotlight-animation" style={{ position: 'absolute', top: '0px', right: '-55px' }}>
                  <SpotLight4 />
                </div>
              )}
              {renderSpotLight3 && (
                <div className="spotlight-animation" style={{ position: 'absolute', top: '0px', left: '-55px' }}>
                  <SpotLight5  />
                </div>
              )}
              {renderSpotLight4 && (
                <div className="spotlight-animation" style={{ position: 'absolute', top: '0px', right: '-55px' }}>
                  <SpotLight2 />
                </div> 
              )}
              {renderSpotLight5 && (
                <div className="spotlight-animation" style={{ position: 'absolute', top: '0px', left: '-55px' }}>
                  <SpotLight3 />
                </div>
              )}
              {renderSpotLight6 && (
                <div className="spotlight-animation" style={{ position: 'absolute', top: '0px', right: '-55px' }}>
                  <SpotLight6 />
                </div>
              )}
        </div>
        <div className="section d-flex align-items-center justify-content-center">
          <Modal show={show} onHide={handleClose} className="custom-modal">
            <Modal.Header closeButton>
              <Modal.Title>App soon available!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{texts.modalBody[language]}</Modal.Body> 
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                {texts.closeButton[language]} 
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="row w-100">
            <div
              ref={leftColumnRef}
              className="col-md-6 d-flex align-items-center justify-content-center"
            >
              <div className="w-90 h-100 d-flex align-items-center justify-content-center">
                <div className="text-center w-50  pt-3">
                  <p className="title">{texts.title[language]}</p> 
                  <p className="subtitle w-100">
                    {texts.subtitle[language]} 
                  </p>
                  <div className="d-flex justify-content-end">
                    <button className="funny-btn fwb" onMouseEnter={handleHover}
                      onMouseLeave={handleHover} onClick={handleShow}>{texts.getAppComponent[language]}</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={rightColumnRef}
              className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden"
            >
              <div className="w-90 h-50 position-relative">
                <div className="text-center w-75">
                  <img
                    src={partyImage}
                    alt="Party"
                    className="phone-image"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    onClick={handleShow}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Section1;
