import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/section5.css'; // Import your custom CSS file if needed
import bar1 from '../images/bar1.jpg';
import bar2 from '../images/bar2.jpg';
import bar3 from '../images/bar3.jpg';

function Section5() {
  return (
    <div className="container section5 pptt ppbb">
      <h2 className="carousel-title ppbb3 title5">Discover the Hottest Spots</h2>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bar3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Find Your Perfect Vibe</h3>
            <p>Discover the most happening bars and clubs for the current moment, tailored to your preferences.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bar2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Explore User Reviews</h3>
            <p>Read real-time reviews and ratings from fellow patrons to help you choose the best spot for your night out.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bar1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Share Your Experience</h3>
            <p>Submit your own reviews and ratings to contribute to the community and help others find their perfect venue.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Section5;
