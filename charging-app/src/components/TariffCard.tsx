import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { Tariff } from '../modules/chargingApi'
import './TariffCard.css'
import defaultImage from '../assets/image.png'

interface ServiceCardProps {
  tariff: Tariff
}

export const ServiceCard: FC<ServiceCardProps> = ({ tariff }) => {
  return (
    <Card className="service-card">
      <Row className="g-0 h-100">
        <Col md={4}>
          <div className="justify-content-center service-image-container">
            <Card.Img
              variant="top"
              className="service-image"
              src={tariff.image_url || defaultImage}
              alt={tariff.nameof_tariff}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = defaultImage
              }}
            />
          </div>
        </Col>
        <Col md={8}>
          <Card.Body className="service-content">
            <Card.Title className="service-title">{tariff.nameof_tariff}</Card.Title>
            <Card.Text className="service-description">
              {tariff.description}
            </Card.Text>
            <div className="service-price">{tariff.price_per_hour} ₽/час</div>
            <div className="service-buttons">
              <Button 
                as={Link as any}
                to={`/tariff/${tariff.id}`}
                variant="outline-secondary"
                className="details-btn"
              >
                Подробнее
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}