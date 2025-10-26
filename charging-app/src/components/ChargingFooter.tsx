import { FC } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import './ChargingFooter.css'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Nav className="footer-content">
              <Nav.Item>
                <Nav.Link className="footer-item">RIP © 2025</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="footer-item">Контакты</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="footer-item">Новости</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="footer-item">Расположение</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}