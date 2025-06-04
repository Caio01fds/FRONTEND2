import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  return (
    <Navbar expand="md" style={{ backgroundColor: '#002F6C'}} variant="dark" className="px-3 shadow-cm">
        <Container fluid>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <img src="/image.png" alt="Uniesp Logo" width={60} height={60} className="me-2 rounded"></img>
            </Navbar.Brand>

            {/* Botão hamburguer visivel apenas em telas pequenas */}
            <Navbar.Toggle onClick={handleShow}/>
              <Navbar.Collapse className="justify-content-end d-none d-md-flex">
                <Nav>
                  <Nav.Link as={Link} to="/a-faculdade" className="px-3">A Faculdade</Nav.Link>
                  <Nav.Link as={Link} to="/dpo-lgpd" className="px-3">DPO LGPD</Nav.Link>
                  <Nav.Link as={Link} to="/noticias" className="px-3">Notícias</Nav.Link>
                  <Nav.Link as={Link} to="/admin-noticias" className="px-3">Admin</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default CustomNavbar