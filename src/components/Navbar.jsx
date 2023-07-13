import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import data from '../data/products.json'
import {NavLink} from "react-router-dom"
import { CartWidget } from "./CartWidget"

const categories = data.map(product => product.category)
const categoryFilter = new Set(categories)

export const NavBar = () => (
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
          <Nav className="me-auto">
            {[...categoryFilter].map(item => (
              <NavLink key={item} className="nav-link" to={`/category/${item}`}>{item}</NavLink>
            ))} 
         {/* <img className='img-cart' src={CartWidget} alt="cartLogo"/> 0  */}
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
);
export default NavBar;
