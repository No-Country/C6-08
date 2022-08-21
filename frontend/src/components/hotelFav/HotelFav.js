import React, { useState } from 'react';
import './hotelFav.css'


const HotelFav = () => {
  const [favHotels, setFavHotels] = useState([]);

  return (
    <section className="favs">
      <div id="contenedor">
        <h1>Alojamientos guardados:</h1>
        {favHotels.length === 0
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
          <div></div>}
      </div>
    </section>

  );
};

export default HotelFav;
