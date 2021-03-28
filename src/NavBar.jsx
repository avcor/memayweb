import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default () => {
    return(
        <Navbar
        collapseOnSelect
        expand='lg'
        sticky="top"
        bg='dark'
        variant='dark'>
        <Navbar.Brand href="/">
          <span style={{ margin: "auto 0 auto 20px" }}>Memay News</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
              <Nav.Link style={{paddingRight: 50}} href="https://memaynews.herokuapp.com/privacy-policy">About us</Nav.Link>
              <Nav.Link style={{paddingRight: 50}} href="mailto:Admin@memay.in">Contact Us</Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}