import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars } from "react-icons/fa";
import './NavigationBar.css'
import '../Button/Button.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="header_wraper">
      <Container>
        <Navbar.Brand><Link to='/home'>LOGO</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='Navbar_toggle'></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '257px' }}
            navbarScroll
          >
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link> 
            <NavDropdown title="Project" id="navbarScrollingDropdown">
              <NavDropdown.Item className='sub_project'><Link to='/projet1'>Poject 1</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action6" className='sub_project'>
              <Link to='/projet2'>Poject 2</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7" className='sub_project'>
              <Link to='/projet3'>Poject 3</Link>
              </NavDropdown.Item>
            </NavDropdown>   
            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>            
            <Nav.Link><Link to='/donate'>Donate</Link></Nav.Link>            
            <Nav.Link>
            <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link >
            <Link to='/contactus'>Contact</Link>
            </Nav.Link>
          </Nav>
         <Link to='/donate'> <button className='btn_main small'>Donate now</button></Link>
          
        
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;