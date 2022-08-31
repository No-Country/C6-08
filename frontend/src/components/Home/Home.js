// import { Button, Form, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import HeroImage from './heroImage';
import SearchForm from './search/searchForm';
import './css/home.css';
import Hotel from '../hotel/Hotel';

const Home = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = (data) => {
    console.log(data);

    setSearch(data);
  };

  return (
    <section id="home-container">
      <HeroImage />
      <SearchForm handleSearch={handleSearch} />
      <Hotel search={search} />
      {/* Crear componente card y pasarle prop search*/}
    </section>
  );
};

export default Home;
