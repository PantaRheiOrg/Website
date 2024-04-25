import React, { useEffect, useRef } from 'react';
import '../css/section1.css';
import '../css/button.css';
import partyImage from '../images/phone.png';

function Section1() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
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
    };
  }, []);

  const handleHover = () => {
    const title = document.querySelector('.title');
    title.classList.toggle('glow');
  };

  return (
    <div className="section d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div
          ref={leftColumnRef}
          className="col-md-6 d-flex align-items-center justify-content-center"
        >
          <div className="w-90 h-100 d-flex align-items-center justify-content-center">
            <div className="text-center w-50">
              <p className="title">THE PARTY APP</p>
              <p className="subtitle w-100">
                Get a free drink to start the night every time you explore
                with PNTA.
              </p>
              <div className="d-flex justify-content-end">
                <button className="funny-btn fwb"  onMouseEnter={handleHover}
                onMouseLeave={handleHover}>Get App</button>
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
