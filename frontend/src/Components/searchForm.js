import React from 'react';
import { Container, Button, Form, Row, Col} from 'react-bootstrap';
import { MapPin, Users, Calendar} from 'phosphor-react';

const searchForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="form-container-home-search">
            <h2>Encuentra alojamiento ideal para tus vacaciones</h2>
            <Form className="form" id="form-home-search">
              <Form.Group className="form-group" id="form-group-home-search">
                <Row>
                  <Col className="d-flex">
                    <MapPin size={32} className="location-search-icon me-2" />
                    <Form.Control type="search" placeholder='Prueba con "Bariloche"'></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex">
                    <Calendar size={32} className="me-2" />
                    <Form.Control type="date" placeholder="Elige tu fecha"></Form.Control>
                  </Col>
                  <Col className="d-flex" lg={6} md={4} sm={2}>
                    <Users size={32} className="users-search-icon me-2" />
                    <Form.Control type="text" placeholder="  Personas"></Form.Control>
                  </Col>
                </Row>
                <Button variant="primary" className="search-button">
                  Buscar
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default searchForm;
