import React, { useEffect, useState, useRef } from 'react';
import '../css/section3.css';
import installImage from '../images/1.gif';
import accountImage from '../images/2.gif';
import drinkImage from '../images/3.gif'; 
import funImage from '../images/4.gif';
import texts from '../text/texts.json';  

function Section3({ language }) {
  const [fadeIn, setFadeIn] = useState([false, false, false, false]);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const sectionRef = useRef(null);

  const imageSize = '300px'; // Set the size for the images

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
                }, (index + 1) * 300)
              );
            });
            observer.unobserve(sectionRef.current);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(sectionRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [fadeIn, hasScrolledDown]);
  return (
    <div className="section3  pptt pt-5" ref={sectionRef}>
    <h2 className="title3 pt-6 text-center ">{texts.section3Title[language]}</h2>
    <div className="row w-100 pptt2 ppbb px-md-5 ">
      <div className={`col-lg-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[0] ? 'fade-in' : ''}`}>
        <div>
          <p className='p311'>1</p>
          <img src={installImage} alt="Install" style={{ width: imageSize, height: imageSize, justifyContent: 'center', alignItems: 'center' }} />
          <p className='p31 tis'>{texts.section3Steps['1'][language]}</p>
        </div>
      </div>
      <div className={`col-lg-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[1] ? 'fade-in' : ''}`}>
        <div>
          <p className='p311'>2</p>
          <img src={accountImage} alt="Account" style={{ width: imageSize, height: imageSize }} />
          <p className='p31 tis'>{texts.section3Steps['2'][language]}</p>
        </div>
      </div>
      <div className={`col-lg-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[2] ? 'fade-in' : ''}`}>
        <div>
          <p className='p311'> 3</p>
          <img src={drinkImage} alt="Drink" style={{ width: imageSize, height: imageSize }} />
          <p className='p31 tis'>{texts.section3Steps['3'][language]}</p>
        </div>
      </div>
      <div className={`col-lg-3 col-sm-6 d-flex align-items-center justify-content-center ${fadeIn[3] ? 'fade-in' : ''}`}>
        <div>
          <p className='p311'>4</p>
          <img src={funImage} alt="Fun" style={{ width: imageSize, height: imageSize }} />
          <p className='p31 tis'>{texts.section3Steps['4'][language]}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Section3;
