import { FC } from 'react'
import { Link } from 'react-router-dom'
import './ChargingFloatingCart.css'

interface FloatingCartProps {
  itemCount?: number
}

export const FloatingCart: FC<FloatingCartProps> = ({ itemCount }) => {
  return (
    <Link to="/application" className="floating-cart">
      {itemCount && itemCount > 0 && (
        <div className="cart-badge">{itemCount}</div>
      )}
      <div className="cart-icon"></div>
    </Link>
  )
}