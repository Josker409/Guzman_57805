import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<>
 <Navbar bg="dark" data-bs-theme="dark">
  <Container>
   <Navbar.Brand href="#home">Auto en Alquiler</Navbar.Brand>
    <Nav className="me-auto">
     <Nav.Link href="#home">¿Quienes somos?</Nav.Link>
     <Nav.Link href="#features">Autos disponibles</Nav.Link>
     <Nav.Link href="#pricing">Referencias</Nav.Link>
    </Nav>
    <CartWidget/>
  </Container>
 </Navbar>
   <br />
</>
);