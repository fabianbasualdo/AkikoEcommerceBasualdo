import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.png';
import CartWidget from './CartWidget'




function ListadeMenues() {
  return (
    <>
   
      <Navbar bg="dark" variant="dark" className="hola" >
        <Container className="contenedorMenu">
          <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="logo" /></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#INICIO">INICIO</Nav.Link>
            <Nav.Link href="#TIENDA">TIENDA ONLINE</Nav.Link>
            <Nav.Link href="#OFERTAS">OFERTAS</Nav.Link>

         

            <Nav.Link href="#CARRITO"> <CartWidget/> </Nav.Link>

{/* /categoria/1  El uno es la variable que colocaremos en la URL, la cual tomara el Router para cargar el componente indicado en el archivo Home.jsx*/}
<br/>
            <Link to='/categoria/3Zv4EJosKnz8eWKhz82T'>Categoria 1</Link>
            <br/>
            <Link to='/categoria/i8cI8rP0sAajG8y64aJc'>Categoria 2</Link>
            
          </Nav>
        </Container>

      </Navbar>
      
    </>
  );
}

export default ListadeMenues;