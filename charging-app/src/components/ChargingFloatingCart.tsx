import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import './ChargingFloatingCart.css'

interface FloatingCartProps {
  itemCount?: number
  userId?: number
}

export const FloatingCart: FC<FloatingCartProps> = ({ 
  itemCount = 0, 
  userId = -1 
}) => {
  const isCartActive = userId !== -1
  
  if (isCartActive) {
    return (
      <Link to="/application" className="floating-cart">
        <Badge className="cart-badge">
          {itemCount > 0 ? (itemCount > 99 ? '99+' : itemCount) : 0}
        </Badge>
        <div className="cart-icon"></div>
      </Link>
    )
  }

  // Неактивная корзина
  return (
    <div className="floating-cart cart-disabled">
      <Badge bg="secondary" className="cart-badge">
        {itemCount}
      </Badge>
      <div className="cart-icon"></div>
    </div>
  )
}