import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import React  from 'react'; 
import { FaRegHeart } from 'react-icons/fa'; 
import {Link} from "react-router-dom"

function Menu(){
    return(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/">Mi Empresa React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <FaRegHeart className="me-2" />
                Alojamientos Guardados
              </Nav.Link>
              <Button href="#" className="ms-2">
                Mi cuenta
              </Button>
              <Button href="#" variant="outline-primary" className="ms-3">
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