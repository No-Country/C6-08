import React from 'react'
import "./hotelDetail.css"
import ReserveCard from '../reserveCard/ReserveCard'

const HotelDetail = () => {
    return (
        <>
            {/* Nombre del alojamiento y algunos botones (Guardar como fav, compartir) */}
            <div className='nombre-hotel'>
                <h2>Hotel Paraiso</h2>
                <p>Provincia de Cartagena, Bolívar, Colombia</p>
            </div>
            <div className='grid-img'>
                <div className='grid-group-1'>
                    <img src='/img/hotel_1.jpg' alt='hotel' className='img-primary' />
                </div>
                <div className='grid-group-2'>
                    <img src='/img/hotel_1.jpg' alt='hotel' className='img-secondary ' />
                    <img src='/img/hotel_2.jpg' alt='hotel' className='img-secondary img-secondary-top' />
                </div>
                <div className='grid-group-3'>
                    <img src='/img/hotel_3.jpg' alt='hotel' className='img-secondary ' />
                    <img src='/img/hotel_4.jpg' alt='hotel' className='img-secondary img-secondary-bottom' />
                </div>
            </div>
            <div className='flex-info'>
                <div className='info-hotel'>
                    <h3>Anfitrion: Juan Perez</h3>
                    <p>Capacidad: 10 personas - 4 dormitorios - 3 baños</p>
                    <hr />

                    <h4>Zona de trabajo</h4>
                    <p>Una habitación privada con wifi ideal para trabajar.</p>
                    <h4> Servicios para la vida cotidiana</h4>
                    <p>El anfitrión equipó este alojamiento para estadías largas y cuenta con cocina, wifi y aire acondicionado.</p>
                    <h4>Cancelación gratuita durante 48 horas.</h4>
                    <hr />

                    <div>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div>
                </div>
                <div>
                    <ReserveCard />
                </div>
            </div>

        </>
    )
}

export default HotelDetail