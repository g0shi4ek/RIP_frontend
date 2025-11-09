import type { FC } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
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