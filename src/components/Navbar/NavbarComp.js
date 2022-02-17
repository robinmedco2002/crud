import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function NavbarComp () {
    return (
        <>

       
      
            <Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={"/"}>Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       
        <Nav.Link as={Link} to={"login"}>login</Nav.Link>
        <Nav.Link as={Link} to={"signup"}>Signup</Nav.Link>
        {/* <Nav.Link as={Link} to={"user"}>User</Nav.Link> */}
        <Nav.Link as={Link} to={"contact"} > Contact us</Nav.Link>
        <Nav.Link as={Link} to={"crud"} > User Details</Nav.Link>
        
      </Nav>  
    </Navbar.Collapse> 
    
    <Link as={Link} to={"users/add"} className="btn btn-outline-light"> Add User </Link>
  </Container>
</Navbar>


        </>
    )
}

export default NavbarComp;
