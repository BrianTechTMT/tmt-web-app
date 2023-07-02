import logo from '../images/TMTLOGO.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar, NavDropdown} from "react-bootstrap"
import React from 'react'
//import {Link} from "react-router-dom"

function NavBar(){
  return(
    <Navbar sticky="top" variant="dark" bg="dark" expand = "lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/">
        <img alt ="" src={logo} width="40" height="40" className='d-inline-block'/>{' '}Đoàn Tôma Thiện
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
        <Nav className='justify-content-end'>
          <Nav.Link href="/#/BCH">Meet the Team</Nav.Link>
          <NavDropdown className='justify-content-end' title ="Resource" id="nav-dropdown">
            <NavDropdown.Item href="/#/Morse">Morse</NavDropdown.Item>
            <NavDropdown.Item href="/#/eucharistic_revival">Eucharistic Revival</NavDropdown.Item>
            <NavDropdown.Item href="#">Semaphore</NavDropdown.Item>
            <NavDropdown.Item href="#">Nút Dây</NavDropdown.Item>
            <NavDropdown.Item href="#">Chuyên Môn</NavDropdown.Item>
            <NavDropdown.Item href="#">Phong Trào</NavDropdown.Item>
            <NavDropdown.Item href="#">  </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='justify-content-end' title="About Us" id="nav-dropdown">
            <NavDropdown.Item href="/#/TMT">Đoàn Tôma Thiện
            </NavDropdown.Item>
            <NavDropdown.Item href="https://veym.net">Vietnamese Eucharistic Youth Movement</NavDropdown.Item>
            <NavDropdown.Item href="https://url.veym.net/LDTG">Liên Đoàn Thánh Gia</NavDropdown.Item>
            <NavDropdown.Item href="https://dmlv.org/">Giáo Xứ Đức Mẹ La Vang</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://doan-tmt.org/gallery">Image Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar

/*return(
  <Navbar sticky="top" variant="dark" bg="dark" expand = "lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Navbar.Brand href="/">
      <img alt ="" src={logo} width="40" height="40" className='d-inline-block'/>{' '}Đoàn Tôma Thiện
    </Navbar.Brand>
      <Nav className='justify-content-end'>
        <NavDropdown className='justify-content-end' title="About Us" id="basic-nav-dropdown">
          <NavDropdown.Item href="/TMT">Đoàn Tôma Thiện
          </NavDropdown.Item>
          
          <NavDropdown.Item href="https://veym.net">Vietnamese Eucharistic Youth Movement</NavDropdown.Item>
          <NavDropdown.Item href="https://url.veym.net/LDTG">Liên Đoàn Thánh Gia</NavDropdown.Item>
          <NavDropdown.Item href="https://dmlv.org/">Giáo Xứ Đức Mẹ La Vang</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="https://doan-tmt.org/gallery">Image Gallery</Nav.Link>
      </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>
)*/