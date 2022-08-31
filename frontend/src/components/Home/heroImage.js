import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroImage = () => {
  return (
    <Carousel fade id="carousel-home">
      
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/hotel-project-fcfea.appspot.com/o/imgs%2Fplaya_del%20carmen.jpg?alt=media&token=8fc025b1-53ec-4ac6-a27a-9718ab8adf63"
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-hero-caption">
          <h3>Playa del Carmen</h3>
          <p>Disfruta de estas increíbles playas en el mar caribe.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/hotel-project-fcfea.appspot.com/o/imgs%2Frio_de_janeiro.jpg?alt=media&token=0b11d4a5-2892-46ed-8ec2-8d2d767f2b4a"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-hero-caption">
          <h3>Rio de Janeiro</h3>
          <p>Visita las increíbles playas troopicales de Rio en Brasil.</p>
        </Carousel.Caption> 
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/hotel-project-fcfea.appspot.com/o/imgs%2FBariloche.jpg?alt=media&token=38b6a499-f016-4744-b809-f3cadf54b7f0"
          alt="Bariloche"
        />
        <Carousel.Caption className="carousel-hero-caption">
          <h3>Bariloche</h3>
          <p>Conoce a una de las ciudades mas lindas de Argentina.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/hotel-project-fcfea.appspot.com/o/imgs%2FMadrid.jpg?alt=media&token=112d2954-7611-47da-97da-46930342f554"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-hero-caption">
          <h3>Madrid</h3>
          <p>Disfruta del atractivo de Madrid.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/hotel-project-fcfea.appspot.com/o/imgs%2FRoma.jpg?alt=media&token=eb8af69e-0bba-4766-a1a2-c359381ad043"
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-hero-caption">
          <h3>Roma</h3>
          <p>Visita los increíbles paisajes de Roma.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroImage;
