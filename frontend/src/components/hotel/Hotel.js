import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/esm/Container';
import { Row, Card, Col } from 'react-bootstrap'
import { HeartStraight } from 'phosphor-react';
import { Link } from "react-router-dom"
import "./hotelFav.css"

const Hotel = (props) => {
  const [listadoHoteles, setListadoHoteles] = useState([])
  const {search} = props

  useEffect(
    () => {
      fetch('https://hotelc608back.herokuapp.com/api/v1/hotel/search/'+search)
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setListadoHoteles(data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    [search]
  )
  // useEffect(
  //   () => {
  //     fetch('https://hotelc608back.herokuapp.com/api/v1/hotel/search/'+search)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data.ubication);
  //         setListadoHoteles(data.ubication);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   },
  //   [search]
  // )

  
  const [active, setActive] = useState(false);
  const fillHeart = (e) => {
    setActive(!active)
  }

  return (
    <section className="home">
      <div id="contenedor">
        <div>
          <Container>
            <h1>Alojamientos Guardados</h1>
            <Row>
              {(listadoHoteles || []).map(listadoHotel => (
                <Col>
                  <Card id="card">
                    <Card.Img
                      variant="top"
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/hotel-project-fcfea.appspot.com/o/imgs%2Fhotel_1.jpg?alt=media&token=34ebaada-1099-4e59-806d-c8df3dec2904'
                      }
                      id="img"
                    />
                    <HeartStraight
                      size={28}
                      weight={active ? 'fill' : null}
                      className={`favorite ${active ? 'favorite-active' : null}`}
                      onClick={fillHeart}
                      id="corazon"
                    />
                    <Card.Body>
                      <Card.Text>
                        <div id="contenido">
                          <Card.Title as={Link} to={'/detail/'+listadoHotel.id} style={{ maxHeight: '25px' }}>
                            <h4>{listadoHotel.title}</h4>
                          </Card.Title>
                        </div>
                        <h6>Precio por noche: $ {listadoHotel.price}</h6>

                        <h6>Ubicación: {listadoHotel.ubication}</h6>
                        {/* <h5>tags</h5> */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        {/*
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

export default Hotel;
