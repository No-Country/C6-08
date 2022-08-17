import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import React  from 'react'; 
import { FaRegHeart } from 'react-icons/fa'; 
import {Link} from "react-router-dom"

function Menu(){
    return(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/"><h2 className='title'>Nombre<span>Empresa</span></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#favs" as={Link} to="/favs">
                <FaRegHeart className="me-2" />
                Alojamientos Guardados
              </Nav.Link>
              <Button href="#cuenta" as={Link} to="/forms" className="ms-2">
                Mi cuenta
              </Button>
              <Button href="#hotel" as={Link} to="/propiedad" variant="outline-primary" className="ms-3">
                Anuncia tu propiedad
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}
export default Menu