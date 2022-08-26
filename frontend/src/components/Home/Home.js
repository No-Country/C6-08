// import { Button, Form, Row } from 'react-bootstrap';
import React from 'react';
import HeroImage from './heroImage';
import SearchForm from './search/searchForm';
import './css/home.css';

const Home = () => {
  return (
    <section id="home-container">
      <HeroImage />
      <SearchForm/>
    </section>
  );
};

export default Home;