import { FC } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Routes'
import './ChargingNavbar.css'
import logoImg from '../assets/logo.svg'

export const CustomNavbar: FC = () => {
  return (
    <Navbar className="header" fixed="top" bg="white" expand={false}>
      <Container fluid className="px-4 navbar-container">
        <Navbar.Brand as={Link} to="/" className="logo">
          <img 
            src={logoImg} 
            alt="Company Logo" 
            width="100" 
            height="60" 
          />
        </Navbar.Brand>
        
        <div className="navbar-right-content">
          <Nav className="d-flex align-items-center">
            <NavDropdown 
              title="Меню" 
              id="basic-nav-dropdown" 
              className="custom-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to={ROUTES.HOME}>
                Главная
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={ROUTES.TARIFFS}>
                Тарифы
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}