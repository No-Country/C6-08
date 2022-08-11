import { Navbar, Container, Nav, Button, Form, Row } from 'react-bootstrap';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mi Empresa React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <FaRegHeart className="me-2" />
                Alojamientos Guardados
              </Nav.Link>
              <Button href="#" className="ms-2">
                Mi cuenta
              </Button>
              <Button href="#" variant="outline-primary" className="ms-3">
                Anuncia tu propiedad
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="home">
        <div className='hero-image'>
          <img src="https://placeimg.com/640/480/nature" alt="imagen" />
        </div>

        <div className="form-container">
          <Row>
            <Form className="form">
              <Form.Group className="form-group">
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
    </>
  );
};

export default Home;
