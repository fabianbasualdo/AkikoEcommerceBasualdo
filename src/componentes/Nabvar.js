import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import logoAkiko from '../assets/img/logoAkiko.jpg'
import logoAkiko from '../assets/img/logo.png'

function ListadeMenues() {
  return (
    <>
   
      <Navbar bg="dark" variant="dark" className="hola" >
        <Container className="contenedorMenu">
          <Navbar.Brand href="#home">  <img className="logo" src={logoAkiko}/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#INICIO">INICIO</Nav.Link>
            <Nav.Link href="#TIENDA">TIENDA ONLINE</Nav.Link>
            <Nav.Link href="#OFERTAS">OFERTAS</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
      
    </>
  );
}

export default ListadeMenues;