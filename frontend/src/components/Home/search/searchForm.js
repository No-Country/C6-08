import React, { useState } from 'react';
import { Container, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { MapPin, Users, Calendar, User, Minus, Plus, Baby, Bed } from 'phosphor-react';
import Loader from './Loader';
import Message from './Message';
import '../css/loader.css';
import DatePicker from 'react-datepicker';


const initialForm = {
  search: '',
  // date: new Date().toDateString(),
};

const SearchForm = () => {
  const [contadorAdultos, setContadorAdultos] = useState(0);
  const [contadorNinios, setContadorNinios] = useState(0);
  const [contadorHabitaciones, setContadorHabitaciones] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [search, setSearch] = useState(null);
  const [cardssearch, setCardssearch] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const sumarAdultos = () =>
    contadorAdultos <= 9 ? setContadorAdultos(contadorAdultos + 1) : contadorAdultos;

  const restarAdultos = () =>
    contadorAdultos > 0 ? setContadorAdultos(contadorAdultos - 1) : contadorAdultos;

  const sumarNinios = () =>
    contadorNinios <= 9 ? setContadorNinios(contadorNinios + 1) : contadorNinios;

  const restarNinios = () =>
    contadorNinios > 0 ? setContadorNinios(contadorNinios - 1) : contadorNinios;

  const sumarHabitaciones = () =>
    contadorHabitaciones <= 4
      ? setContadorHabitaciones(contadorHabitaciones + 1)
      : contadorHabitaciones;

  const restarHabitaciones = () =>
    contadorHabitaciones > 0
      ? setContadorHabitaciones(contadorHabitaciones - 1)
      : contadorHabitaciones;

  const handleSearch = data => {
    console.log(data);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  return (
    <>
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
                      <Form.Control
                        type="search"
                        name="search"
                        placeholder='Prueba con "Bariloche"'
                        onChange={handleChange}
                        value={form.search}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex">
                      <Calendar size={32} className="me-2" />
                      <DatePicker
                        id="date-picker-home"
                        dateFormat="dd/MM/yy"
                        selected={startDate}
                        // onChange={date => setStartDate(date)}
                        minDate={new Date()}
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={
                          (update => {
                            setDateRange(update);
                          })
                        }
                        placeholderText="Elige tu rango de fechas"
                        showMonthDropdown
                        showDisabledMonthNavigation
                      >
                        <div className="date-weather-advice-home">
                          No olvides revisar el estado del tiempo!
                        </div>
                      </DatePicker>
                      {/* <Form.Control
                        type="date"
                        placeholder="Elige tu fecha"
                        onChange={handleChange}
                        value={form.date}
                      ></Form.Control> */}
                    </Col>

                    <Col className="d-flex mt-2">
                      <Users size={32} className="users-search-icon me-2" />
                      {/* <Form.Control type="text" placeholder="Personas"></Form.Control> */}
                      <Dropdown className="d-inline mx-2" autoClose="outside">
                        <Dropdown.Toggle id="dropdown-autoclose-outside" md={4}>
                          Selecciona la cantidad de personas
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item id="dropdown-item-home">
                            <User size={24} className="me-2" />
                            Adultos:
                            <Button
                              variant="default"
                              className="ms-2 me-2"
                              onClick={sumarAdultos}
                              // onChange={handleChange}
                              // value={form.date}
                            >
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

        {loading && <Loader />}
        {error && <Message msg="Ocurrió un error al realizar la búsqueda" bgColor="#dc3545" />
        /*msg={`Error ${error.status}: ${error.statusText}`}*/
        }
      </Container>
    </>
  );
};

export default SearchForm;
