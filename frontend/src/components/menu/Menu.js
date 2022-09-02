import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './menu.css'

function Menu() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home" as={Link} to="/"><h2 className='title'>Reserva<span>Hoteles</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className='container-links'>
              <Link href="#favs" to="/favs">
                <FaRegHeart className="me-2" />
                Alojamientos Guardados
              </Link>
              <Link href="#login" to="/login" className='button-account'>Mi cuenta</Link>
              <Link href="#propiedad" to="/propiedad" className='button-property'> Anuncia tu propiedad </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Menu