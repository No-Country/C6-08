// import { Button, Form, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import HeroImage from './heroImage';
import SearchForm from './search/searchForm';
import './css/home.css';
import helpHttp from '../helpers/helpHttp';

const Home = () => {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);

  // useEffect(() => {
  //   if (search === null) return;

  //   const fetchData = async () => {
  //     // const { search } = search;

  //     let searchURL = `https://hotelc608back.herokuapp.com/api/v1/hotel/search/${search}`; /*${search}*/
  //     console.log(searchURL);

  //     setLoading(true);

  //     const [searchRes] = Promise.all([helpHttp().get(searchURL)]);
      
  //     console.log(searchRes);

  //     setSearch(searchRes);
  //     setLoading(false);
  //     /*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2MTc4OTA0MywiZXhwIjoxNjYxODA3MDQzfQ.TywP6UHJwrsD1_TgNYBOyPc0gUGtvNt2_B8Abar1rJM */
  //   };

  //   fetchData();
  // }, [search]);

  const handleSearch = data => {
    console.log(data);

    setSearch(data);
  };

  return (
    <section id="home-container">
      <HeroImage />
      <SearchForm handleSearch={handleSearch} />
      {/* Crear componente card y pasarle prop search*/}
    </section>
  );
};

export default Home;
