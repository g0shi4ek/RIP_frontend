import { FC } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ChargingNavbar.css'
import iconImg from '../assets/home-icon.svg'
import logoImg from '../assets/logo.svg'

export const CustomNavbar: FC = () => {
  return (
    <Navbar className="header" fixed="top" bg="white" expand="lg">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="logo">
          <img 
            src={logoImg} 
            alt="Company Logo" 
            width="100" 
            height="60" 
          />
        </Navbar.Brand>
        
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="icon">
            <img 
              src={iconImg}
              alt="User menu icons" 
              width="30" 
              height="30" 
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}