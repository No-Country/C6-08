import { Button, Form, Row } from 'react-bootstrap';
import React from 'react';

const Home = () => {
  return (
      <section className="home">
        <div className='hero-image'>
          <img src="https://placeimg.com/640/480/nature" alt="imagen" />
        </div>

        <div className="form-container">
          <Row>
            <Form className="form" id="form">
              <Form.Group className="form-group" id="form-group">
                <Form.Control type="text" placeholder='🗺️ Prueba con "Bariloche"'></Form.Control>
                <Form.Control type="text" placeholder="🧑 Personas"></Form.Control>
                <Button variant="primary" className="search-button">
                  Buscar
                </Button>
              </Form.Group>
            </Form>
          </Row>
        </div>
      </section>
    
  );
};

export default Home;
