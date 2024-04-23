import React, { useEffect, useState, useRef } from 'react';
import '../css/section3.css';
import installImage from '../images/install.png';
import accountImage from '../images/account.png';
import drinkImage from '../images/drink.png';
import funImage from '../images/fun.png';

function Section3() {
  const [fadeIn, setFadeIn] = useState([false, false, false, false]);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const sectionRef = useRef(null);

  const imageSize = '190px'; // Set the size for the images

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolledDown) {
        setHasScrolledDown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolledDown]);

  useEffect(() => {
    if (hasScrolledDown) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const timeouts = [];
            fadeIn.forEach((_, index) => {
              timeouts.push(
                setTimeout(() => {
                  setFadeIn(prevState => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                  });
                }, (index + 1) * 300) // Adjust timing as needed
              );
            });
            observer.unobserve(sectionRef.current);
          }
        });
      }, { threshold: 0.5 }); // Adjust threshold as needed

      observer.observe(sectionRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [fadeIn, hasScrolledDown]);
  return (
    <div className="section3 d-flex flex-column align-items-center justify-content-center pptt" ref={sectionRef}>
      <h2 className="title3 pt-6 fade-in">Guide</h2>
      <div className="row w-75 pptt2 ppbb">
        <div className={`col-md-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[0] ? 'fade-in' : ''}`}>
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-100 '>
              <p className='p311'>1</p>
              <img src={installImage} alt="Install" style={{ height: imageSize, padding: '20px 0' }} />
              <p className='p31'>Install the app</p>
            </div>
          </div>
        </div>
        <div className={`col-md-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[1] ? 'fade-in' : ''}`}>
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-75'>
              <p className='p321'>2</p>
              <img src={accountImage} alt="Account" style={{ width: imageSize, height: imageSize }} />
              <p className='p32'>Sign up</p>
            </div>
          </div>
        </div>
        <div className={`col-md-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[2] ? 'fade-in' : ''}`}>
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className='text-center w-75'>
              <p className='p331'> 3</p>
              <img src={drinkImage} alt="Drink" style={{ width: imageSize, height: imageSize }} />
              <p className='p33'>Free drink</p>
            </div>
          </div>
        </div>
        <div className={`col-md-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[3] ? 'fade-in' : ''}`}>
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
