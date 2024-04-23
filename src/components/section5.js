import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/section5.css'; // Import your custom CSS file if needed
import bar1 from '../images/bar1.jpg';
import bar2 from '../images/bar2.jpg';
import bar3 from '../images/bar3.jpg';

function Section5() {
  return (
    <div className="container pptt ppbb">
      <h2 className="carousel-title ppbb3 title5">Explore the Nightlife</h2>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bar3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bar2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={bar1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Section5;
