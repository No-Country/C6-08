import React, { useState } from 'react';
import { Container, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { MapPin, Users, Calendar, User, Minus, Plus, Baby, Bed } from 'phosphor-react';

const SearchForm = () => {
  const [contadorAdultos, setContadorAdultos] = useState(0);
  const [contadorNinios, setContadorNinios] = useState(0);
  const [contadorHabitaciones, setContadorHabitaciones] = useState(0);

  const sumarAdultos = () => {
    if (contadorAdultos <= 9) {
      setContadorAdultos(contadorAdultos + 1);
    } else {
      return;
    }
  };

  const restarAdultos = () => {
    if (contadorAdultos > 0) {
      setContadorAdultos(contadorAdultos - 1);
    } else {
      return;
    }
  };

  const sumarNinios = () => {
    if (contadorNinios <= 9) {
      setContadorNinios(contadorNinios + 1);
    } else {
      return;
    }
  };

  const restarNinios = () => {
    if (contadorNinios > 0) {
      setContadorNinios(contadorNinios - 1);
    } else {
      return;
    }
  };

  const sumarHabitaciones = () => {
    if (contadorHabitaciones <= 4) {
      setContadorHabitaciones(contadorHabitaciones + 1);
    } else {
      return;
    }
  };

  const restarHabitaciones = () => {
    if (contadorHabitaciones > 0) {
      setContadorHabitaciones(contadorHabitaciones - 1);
    } else {
      return;
    }
  };

  return (
    <Container id="search-form-container">
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
                  <Col className="d-flex mt-2">
                    <Users size={32} className="users-search-icon me-2" />
                    {/* <Form.Control type="text" placeholder="Personas"></Form.Control> */}
                    <Dropdown className="d-inline mx-2" autoClose="outside">
                      <Dropdown.Toggle id="dropdown-autoclose-outside" md={4}>
                        Selecciona la cantidad de personas
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <User size={24} className="me-2" />
                          Adultos:
                          <Button variant="default" className="ms-2 me-2" onClick={sumarAdultos}>
                            <Plus size={16} />
                          </Button>
                          {contadorAdultos}
                          <Button variant="default" className="ms-2 me-2" onClick={restarAdultos}>
                            <Minus size={16} />
                          </Button>
                          <small>(+18 a&ntilde;os - Hasta 10 adultos)</small>
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <Baby size={24} className="me-2" />
                          Niños:
                          <Button variant="default" className="ms-4 me-2" onClick={sumarNinios}>
                            <Plus size={16} />
                          </Button>
                          {contadorNinios}
                          <Button variant="default" className="ms-2 me-2" onClick={restarNinios}>
                            <Minus size={16} />
                          </Button>
                          <small>(0-17 a&ntilde;os - Hasta 10 ni&ntilde;os)</small>
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <Bed size={24} className="me-2" />
                          Habitaciones:
                          <Button
                            variant="default"
                            className="ms-2 me-2"
                            onClick={sumarHabitaciones}
                          >
                            <Plus size={16} />
                          </Button>
                          {contadorHabitaciones}
                          <Button
                            variant="default"
                            className="ms-2 me-2"
                            onClick={restarHabitaciones}
                          >
                            <Minus size={16} />
                          </Button>
                          <small>(Hasta 5 habitaciones)</small>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <small className="d-flex flex-row-reverse cant-personas mt-2">
                    Adultos: {contadorAdultos} {''}
                    Niños: {contadorNinios} {''}
                    Habitaciones: {contadorHabitaciones}
                  </small>
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

export default SearchForm;
