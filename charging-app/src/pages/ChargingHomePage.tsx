import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Routes'
import './ChargingHomePage.css'

export const HomePage: FC = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-title">Зарядные станции</div>
          <div className="hero-subtitle">Зарядите ваш автомобиль до 80% всего за 30 минут</div>
          <div className="hero-buttons">
            <Link to={ROUTES.TARIFFS} className="hero-btn">
              Доступные тарифы
            </Link>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              Широкий выбор тарифов под любой бюджет
            </div>
            <div className="feature-item">
              Круглосуточная поддержка клиентов
            </div>
            <div className="feature-item">
              Премиальные станции постоянного тока
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}