import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Users, Bed, Bathtub, Check } from 'phosphor-react';
import Modal from './modal/Modal';
import ReserveCard from './reserveCard/ReserveCard'
import "./hotelDetail.css"
import HotelMap from './hotelMap/HotelMap';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const HotelDetail = () => {

    const [stateModal, setStateModal] = useState(false);
    const [stateModalTwo, setStateModalTwo] = useState(false);
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    
    useEffect(
        () => {
            const request = async () => {
                try {
                    const result = await fetch('https://hotelc608back.herokuapp.com/api/v1/hotel/'+id);
                    const response = await result.json();
                    setHotel(response.data.hotel)
                    console.log(hotel);

                } catch (error) {
                    console.log(error);
                }
            }
            request();
        },[id]
    )
    
    return (
      <div className="container-hotel-detail">
        <Container>
          {/* Nombre del alojamiento y algunos botones (Guardar como fav, compartir) */}
          <div className="nombre-hotel">
            <h2>{hotel.title}</h2>
            <p>
              Provincia de {hotel.state}, {hotel.city}, {hotel.country}
            </p>
          </div>
          <div className="grid-img">
            <div className="grid-group-1">
              <img src="/img/hotel_1.jpg" alt="hotel" className="img-primary" />
            </div>
            <div className="grid-group-2">
              <img src="/img/hotel_1.jpg" alt="hotel" className="img-secondary " />
              <img src="/img/hotel_1.jpg" alt="hotel" className="img-secondary img-secondary-top" />
            </div>
            <div className="grid-group-3">
              <img src="/img/hotel_1.jpg" alt="hotel" className="img-secondary " />
              <img
                src="/img/hotel_1.jpg"
                alt="hotel"
                className="img-secondary img-secondary-bottom"
              />
            </div>
          </div>
          <div className="flex-info">
            <div className="info-hotel">
              <div>
                <h3>Hotel</h3>
                <ul className="list-details">
                  <li>
                    <span>
                      <Users size={24} /> 10 personas{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      <Bed size={24} /> 4 dormitorios{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      <Bathtub size={24} /> 3 baños
                    </span>
                  </li>
                </ul>
              </div>
              <hr />
              <p id='hotel-detail-description'>{hotel.description}</p>
              <hr />

              <div>
                <h3>Lo que ofrece este lugar</h3>
                <p>Te proporcionamos un listado de todos los servicios</p>
                <div className="container-services">
                  <Check size={24} />
                  <span>Cocina</span>
                  <Check size={24} />
                  <span>Lavavajilla</span>
                  <Check size={24} />
                  <span>Sala de fitness</span>
                  <Check size={24} />
                  <span>Aire acondicionado</span>
                </div>
                <div>
                  <button className="button-services" onClick={() => setStateModal(true)}>
                    Mostrar más
                  </button>
                </div>
              </div>
            </div>
            <div>
              <ReserveCard />
            </div>
            <div className="location-container">
              <h3>
                {hotel.country}, {hotel.state}, {hotel.city}, {hotel.adress}, {hotel.cp}
             </h3>
              <HotelMap />
            </div>
            <div className="owner-info">
              <h3>Anfitrion</h3>
              <div className="container-pfp">
                <img src="/img/pfp.jpg" alt="propietario pfp" className="hotel-pfp" />
                <p>Juan Perez</p>
              </div>
              <div>
                <p>
                  <b>Calificaciones:</b> 4 estrellas
                </p>
                <p>
                  <b>Tiempo de respuesta promedio:</b> 6 horas
                </p>
              </div>
              <div>
                <button className="button-services" onClick={() => setStateModalTwo(true)}>
                  Contactar con la persona propietaria
                </button>

                <Modal state={stateModal} setState={setStateModal}>
                  <div className="container-services">
                    <Check size={24} />
                    <span>Cocina</span>
                    <Check size={24} />
                    <span>Lavavajilla</span>
                    <Check size={24} />
                    <span>Sala de fitness</span>
                    <Check size={24} />
                    <span>Aire acondicionado</span>
                    <Check size={24} />
                    <span>Lavadora de ropa</span>
                    <Check size={24} />
                    <span>Wi-fi</span>
                    <Check size={24} />
                    <span>Oficina</span>
                    <Check size={24} />
                    <span>Microondas</span>
                  </div>
                </Modal>
                <Modal state={stateModalTwo} setState={setStateModalTwo}>
                  <div className="container-info-owner">
                    <h4>Telefono:</h4>
                    <span>+54 0343 4785943</span>
                    <h4>E-mail:</h4>
                    <span>juanperez@gmail.com</span>
                  </div>
                </Modal>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </Container>
      </div>
    );
}

export default HotelDetail