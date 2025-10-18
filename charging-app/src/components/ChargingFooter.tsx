import { FC } from 'react'
import './ChargingFooter.css'

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-item">RIP © 2025</div>
        <div className="footer-item">Контакты</div>
        <div className="footer-item">Новости</div>
        <div className="footer-item">Расположение</div>
      </div>
    </div>
  )
}