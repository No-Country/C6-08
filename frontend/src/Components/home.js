import React from 'react';
import HeroImage from './heroImage';
import SearchForm from './SearchForm';
import "../css/home.css";

const Home = () => {

  return (
    <>
      <section className="home">
        <div className="hero-image">
          <HeroImage/>
          <SearchForm/>
        </div>
      </section>
    </>
  );
};

export default Home;
