// import cart from "../img/cart.jpg"


// export const NavBar = () => (
//   <header>
//     <nav>
//         <h1>My E-Commerce</h1>
//       <ul>
//         <li>
//           <a href="*">Home</a>
//           <a href="*">MisProductos</a>
//           <a href="*">Descuentos</a>
//         </li>
//       </ul>
//     </nav>
//     {/* <img src={cart} alt="cartLogo"/> 0 */}
//   </header>
// );

//   export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => (
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
);
export default NavBar;
