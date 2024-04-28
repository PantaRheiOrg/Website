import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/section5.css'; 
import bar1 from '../images/bar1.jpg';
import bar2 from '../images/bar2.jpg';
import bar3 from '../images/bar3.jpg';
import texts from '../text/texts.json';

function Section5({ language }) {
  return (
    <div className="section5">
<div className="container pptt ppbb pt-3">
      <h2 className="carousel-title ppbb3 title5">{texts.section5Title[language]}</h2>
      <Carousel className="carousel">
        {texts.carouselSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 carousel-image" src={index === 0 ? bar3 : index === 1 ? bar2 : bar1} alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
              <h3>{slide[language].title}</h3>
              <p>{slide[language].subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </div>
    
  );
}

export default Section5;
