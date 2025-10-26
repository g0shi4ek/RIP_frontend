import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import './ChargingFloatingCart.css'

interface FloatingCartProps {
  itemCount?: number
}

export const FloatingCart: FC<FloatingCartProps> = ({ itemCount = 0 }) => {
  return (
    <Link to="/application" className="floating-cart">
      {itemCount > 0 && (
        <Badge bg="primary" className="cart-badge">
          {itemCount > 99 ? '99+' : itemCount}
        </Badge>
      )}
      <div className="cart-icon"></div>
    </Link>
  )
}