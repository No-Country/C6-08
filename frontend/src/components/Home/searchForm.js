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
              <div className='container-grid-search'>
                <div className='container-input-search' id='first-search-child'>
                  <MapPin size={24} className="location-search-icon me-2" />
                  <input type="search" placeholder='Prueba con "Bariloche"' />
                </div>

                <div className='container-input-search'>
                  <Calendar size={24} className="me-2" />
                  <input type="date" placeholder="Elige tu fecha" />
                </div>
                <div className='container-input-search'>
                  <Users size={24} className="me-2" />
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
                </div>
                <div className='counter'>
                  <small className="d-flex flex-row-reverse cant-personas mt-2">
                    Adultos: {contadorAdultos} {''}
                    Niños: {contadorNinios} {''}
                    Habitaciones: {contadorHabitaciones}
                  </small>
                </div>
                <button className="search-button">
                  Buscar
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
