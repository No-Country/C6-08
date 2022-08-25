import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroImage = () => {
  return (
    <Carousel fade>
      
      <Carousel.Item className="carousel-item">
        <img className="d-block w-100" src="https://placeimg.com/640/480/animals" alt="Bariloche" />
        {/* <Carousel.Caption className="carousel-hero-caption">
          <h3>Bariloche</h3>
          <p>Conoce a una de las ciudades mas lindas de Argentina.</p>
        </Carousel.Caption> */}
        
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://placeimg.com/640/480/people"
          alt="Second slide"
        />
        {/* <Carousel.Caption className="carousel-hero-caption">
          <h3>Playa del Carmen</h3>
          <p>Disfruta de estas increíbles playas en el mar caribe.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img className="d-block w-100" src="https://placeimg.com/640/480/tech" alt="Third slide" />
        {/* <Carousel.Caption className="carousel-hero-caption">
          <h3>Rio de Janeiro</h3>
          <p>Visita las increíbles playas troopicales de Rio en Brasil.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img className="d-block w-100" src="https://placeimg.com/640/480/any" alt="Third slide" />
        {/* <Carousel.Caption className="carousel-hero-caption">
          <h3>Madrid</h3>
          <p>Disfruta del atractivo de Madrid.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img className="d-block w-100" src="https://placeimg.com/640/480/any" alt="Third slide" />
        {/* <Carousel.Caption className="carousel-hero-caption">
          <h3>Roma</h3>
          <p>Visita los increíbles paisajes de Roma.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroImage;
