import {Nav,Navbar,Button} from "react-bootstrap";

const NavBar = (props) => {
    return ( <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">IIIT Pune Time Table Manager</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
      {props.user? <Button variant="danger" onClick={props.logout}>Log Out</Button>:null}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
   );
}
 
export default NavBar;