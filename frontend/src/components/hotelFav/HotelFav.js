import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/esm/Container';
import { Row, Card, Button, Col } from 'react-bootstrap'
import { HeartStraight } from 'phosphor-react';
import { Link } from "react-router-dom"
import DatePicker from 'react-datepicker';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "react-datepicker/dist/react-datepicker.css";
import "./hotelFav.css"

const HotelFav = () => {
  const [listadoHoteles, setListadoHoteles] = useState([])

  useEffect(
    () => {
      fetch("")
        .then(res => res.json())
        .then(data => {
          setListadoHoteles(data.results)
        })
        .catch(e => {
          console.log(e)
        })
    },
    []
  )

  const ReservePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

    return (
      <DatePicker
        dateFormat="dd/MM/yy"
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        id="date"
      />
    );
  };

  const [active, setActive] = useState(false);
  const fillHeart = (e) => {
    setActive(!active)
  }

  return (
    <section className="home">
      <div id="contenedor">
        <Navbar id="nav" variant="dark">
          <Container display="flex">
            <Nav >
              <Nav.Item>
                <Nav.Link>
                  <ReservePicker id="date" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Button id="boton" variant="primary">Comprobar disponibilidad</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </Navbar>
        {listadoHoteles.length === 0
          ?
          <div className='placeholder-favs'>
            <h2>Nada por aqui... todavia</h2>
            <img src='/img/hotel_fav.jpg' alt='hoteles favoritos' />
            <p>Parece que tu lista de alojamientos guardados está vacía.</p>
            <p>Mientras buscas, pulsa el icono del corazón en el alojamiento que te guste,<br/>
              así lo guardas para verlo más tarde.</p>
            <a href="/" className='button-fav'> Empezar a buscar </a>
          </div>
          :
          <div>
            <Container>
          <h1>Alojamientos Guardados</h1>
          <Row>
          {listadoHoteles.map(listadoHotel =>
            <Col >
              <Card id="card">
                <Card.Img variant="top" src={""} 
                  id="img" />
                <HeartStraight size={28} weight={active ? "fill" : null}
                    className={`favorite ${active ? "favorite-active" : null}`}
                    onClick={fillHeart} id="corazon"/>
                <Card.Body >
                  <Card.Text >
                    <div id="contenido">
                      <Card.Title as={Link} to={'/detail/'} style={{ maxHeight: "25px" }}><h4 >Hotel</h4></Card.Title>
                      <h4>$precio</h4>
                    </div>
                    <h5>ubicacion</h5>
                    <h5>tags</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          
          </Row>      
        </Container>
          </div>
        }{/*
        <Container>
          <h1>Hoteles Favoritos:</h1>
          <Row>
            <Col >
              <Card id="card" >
                <Card.Img variant="top" src={"https://bariloche.org/wp-content/uploads/2022/06/alojamiento-en-bariloche.jpg"}
                  id="img" />
                <HeartStraight size={28} weight={active ? "fill" : null}
                  className={`favorite ${active ? "favorite-active" : null}`}
                  onClick={fillHeart} id="corazon" />

                <Card.Body id="body">
                  <Card.Text >
                    <div id="contenido">
                      <Card.Title as={Link} to={'/detail/'} style={{ maxHeight: "25px" }}><h4 >Hotel</h4></Card.Title>
                      <h4>$precio</h4>
                    </div>
                    <h5>ubicacion</h5>
                    <h6>tags</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card id="card" >
                <Card.Img variant="top" src={"https://bariloche.org/wp-content/uploads/2022/06/alojamiento-en-bariloche.jpg"}
                  id="img" />
                <HeartStraight size={28} weight={active ? "fill" : null}
                  className={`favorite ${active ? "favorite-active" : null}`}
                  onClick={fillHeart} id="corazon" />

                <Card.Body >
                  <Card.Text >
                    <div id="contenido">
                      <Card.Title as={Link} to={'/detail/'} style={{ maxHeight: "25px" }}><h4 >Hotel2</h4></Card.Title>
                      <h4>$precio2</h4>
                    </div>
                    <h5>ubicacion2</h5>
                    <h6>tags2</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
*/}
      </div>
    </section>

  );
};

export default HotelFav;
