import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ROUTES } from '../Routes'
import './ChargingHomePage.css'

export const HomePage: FC = () => {
  return (
    <Container fluid className="custom-container-1">
      <Row className="hero-section justify-content-center align-items-center">
        <Col xs={12}>
          <div className="hero-content">
            <h1 className="hero-title">Зарядные станции</h1>
            <p className="hero-subtitle">
              Зарядите ваш автомобиль до 80% всего за 30 минут
            </p>
            <div className="hero-buttons">
              <Button 
                as={Link as any}
                to={ROUTES.TARIFFS}
                className="hero-btn"
                size="lg"
              >
                Доступные тарифы
              </Button>
            </div>
            <Row className="features-grid justify-content-center">
              <Col xs={12} md={4} className="feature-item">
                Широкий выбор тарифов под любой бюджет
              </Col>
              <Col xs={12} md={4} className="feature-item">
                Круглосуточная поддержка клиентов
              </Col>
              <Col xs={12} md={4} className="feature-item">
                Премиальные станции постоянного тока
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}