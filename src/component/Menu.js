import React from 'react'
import "./menu.css"

import { NavLink ,Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Menu = () => {
    let expand = 'md';
    let homeurl = "/";
  
  return (
    <>

<Container fluid className='main-menu px-md-5 px-sm-0'>
          
    <Navbar key={expand} bg="transparent"  expand={expand} className="navbar-dark mb-3 mobilebg">
            <Navbar.Brand href={homeurl}><h2>LOGO</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <NavLink to={homeurl} className="mobile-view-img">LOGO</NavLink>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end gap-md-5 flex-grow-1 pe-3 mobilebiew">
                        <NavLink to="/about" className="borderbottom">ABOUT</NavLink>
                        <NavLink to="/services" className="borderbottom">Services</NavLink>
                        <NavLink  to="/contact">Contact</NavLink>
                    </Nav>
             
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    </Container>

    <Outlet />
    </>
  )
}

export default Menu
