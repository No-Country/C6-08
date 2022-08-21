import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './menu.css'

function Menu() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" as={Link} to="/"><h2 className='title'>Nombre<span>Empresa</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className='container-links'>
              <Nav.Link href="#favs" as={Link} to="/favs">
                <FaRegHeart className="me-2" />
                Alojamientos Guardados
              </Nav.Link>
              <a href="/login" className='button-account'>Mi cuenta</a>
              <a href="/propiedad" className='button-property'> Anuncia tu propiedad </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Menu