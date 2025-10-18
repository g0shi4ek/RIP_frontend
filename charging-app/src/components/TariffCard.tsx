import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Tariff } from '../modules/chargingApi'
import './TariffCard.css'
import defaultImage from '../assets/image.png'

interface ServiceCardProps {
  tariff: Tariff
}

export const ServiceCard: FC<ServiceCardProps> = ({ tariff }) => {
  return (
    <div className="service-card">
      <div className="service-content">
        <div className="service-title">{tariff.nameof_tariff}</div>
        <div className="service-description">{tariff.description}</div>
        <div className="service-price">{tariff.price_per_hour} ₽/час</div>
        <div className="service-buttons">
          <Link to={`/tariff/${tariff.id}`} className="details-btn">
            Подробнее
          </Link>
        </div>
      </div>
      <div className="service-image-container">
        <img 
          className="service-image"
          src={tariff.image_url || defaultImage}
          alt={tariff.nameof_tariff}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = defaultImage
          }}
        />
      </div>
    </div>
  )
}