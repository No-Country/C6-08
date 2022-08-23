// import { Button, Form, Row } from 'react-bootstrap';
import React from 'react';
import HeroImage from './heroImage';
import SearchForm from './searchForm';
import './css/home.css';

const Home = () => {
  return (
    <section className="home">
      <HeroImage />
      <SearchForm />
    </section>
  );
};

export default Home;